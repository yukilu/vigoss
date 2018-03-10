package main

import ("fmt"; "regexp"; "strings"; "database/sql"; "encoding/json"; "net/http"; "net/url"; _ "github.com/mattn/go-sqlite3")

type Poem struct {
	Title, Author string
	Content []string
}
var pType = map[string]string{"cyjc": "cyjc", "modern": "modern", "southernSongPoem": "songpoem", 
    "northernSongPoem": "songpoem", "songPoetry": "songpoetry"}
var pList = make(map[string][]byte, 5)
var pStrList = make(map[string][]string, 5)

func main() {
	http.HandleFunc("/", poetry)
	err := http.ListenAndServe(":3000", nil)
	checkError(err)
}

func poetry(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	//res := `["陆游","苏轼","辛弃疾"]`
	// res := `{"title":"钗头凤","author":"陆游","content":["红酥手","黄藤酒","满城春色宫墙柳"]}`
	poemType, poet := handleUrl(req.RequestURI)
	var ok bool
	if poemType, ok = pType[poemType]; !ok {
        poemType = ""
	}
	var res []byte
	if poemType == "" {
		res = []byte("[]")
	} else if poet == "" {
		res = getPoets(poemType)
	} else {
		res = getPoems(poemType, poet)
	}
	w.Write(res)
}

func handleUrl(urlStr string) (poemType string, poet string) {
	// fmt.Println(urlStr)
	u, err := url.Parse(urlStr)
	checkError(err)
	// fmt.Println(u.Path)
	pat := "/poetry/([a-zA-Z]+)(?:/author/([\u4e00-\u9fa5]+))?"
	re, err := regexp.Compile(pat)
	checkError(err)

	match := re.FindStringSubmatch(u.Path)
	length := len(match)
	if length == 2 {
		poemType = match[1]
	} else if length == 3 {
		poemType = match[1]
		poet = match[2]
	}
	return
}

func getPoets(poemType string) []byte {
	var poetsListJson []byte
	if poetsListJson , ok := pList[poemType]; ok {
		return poetsListJson
	}

	db, err := sql.Open("sqlite3", "./poetry.db")
	checkError(err)
	defer db.Close()

	queryStr := fmt.Sprintf("SELECT author from %s", poemType)
	rows, err := db.Query(queryStr)
	checkError(err)

	poets := make(map[string]int, 30)
	for rows.Next() {
		var poet string
		err := rows.Scan(&poet)
		checkError(err)
        poets[poet] += 1
	}

	poetsList := sortPoets(poets)
	pStrList[poemType] = poetsList
	poetsListJson, err = json.Marshal(poetsList)
	checkError(err)
	pList[poemType] = poetsListJson
	return poetsListJson
}

func getPoems(poemType string, poet string) []byte {
	db, err := sql.Open("sqlite3", "./poetry.db")
	checkError(err)
	defer db.Close()

	queryStr := fmt.Sprintf("SELECT * from %s where author='%s'", poemType, poet)
	rows, err := db.Query(queryStr)

	poems := make([]*Poem, 0)
	for rows.Next() {
		var id int
		var title, author, content string
		err := rows.Scan(&id, &title, &author, &content)
		checkError(err)

		contentArr := strings.Split(content, "\n")

		ppoem := &Poem{title, author, contentArr}
		poems = append(poems, ppoem)
	}

	js, err := json.Marshal(poems)
	js = []byte(strings.ToLower(string(js)))
	checkError(err)

	return js
}

func sortPoets(poets map[string]int) []string {
	length := len(poets)
	poetInts := make([]int, length)
	poetNames := make([]string, length)

	i := 0
	for k, v := range poets {
		poetInts[i] = v
		poetNames[i] = k
		i++
	}

	for j := 1; j < length; j++ {
		for k := 0; k < length - j; k++ {
			if poetInts[k] < poetInts[k + 1] {
				poetInts[k], poetInts[k + 1] = poetInts[k + 1], poetInts[k]
				poetNames[k], poetNames[k + 1] = poetNames[k + 1], poetNames[k]
			}
		}
	}

	return poetNames
}

func checkError(err error) {
	if err != nil {
		panic(err)
	}
}
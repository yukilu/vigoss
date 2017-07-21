function Poem(props) {
    const poem = props.poem;
    const poemBody = poem.content.map((item, index) => <p key={index}>{item}</p>);
    return (
        <div>
            <h2>{poem.title}</h2>
            <h4>{poem.author}</h4>
            <div>{poemBody}</div>
        </div>
    );
}

export default Poem;
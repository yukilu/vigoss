interface BookLi {
    name: string;
    src: string;
    link: string;
    tag: string;
}

interface BookData {
    [index: string]: BookLi;
}

export const BooksReaded = [
    {
        name: 'C Primer Plus(中文版)(第5版)',
        src: 'CPrimerPlus.jpg',
        link: 'https://www.amazon.cn/dp/B01FE26HAU',
        tag: 'C'
    }, {
        name: 'Java核心技术(卷1):基础知识(原书第9版)',
        src: 'CoreJava-1.jpg',
        link: 'https://www.amazon.cn/dp/B01M06CLQM',
        tag: 'Java'
    }, {
        name: 'JavaScript高级程序设计(第3版)',
        src: 'Prefessional_JavaScript.jpg',
        link: 'https://www.amazon.cn/dp/B007OQQVMY',
        tag: 'JavaScript'
    }, {
        name: 'JavaScript面向对象编程指南(第2版)',
        src: 'Object-Oriented_JavaScript.jpg',
        link: 'https://www.amazon.cn/dp/B00S97EA8E',
        tag: 'JavaScript'
    }, {
        name: 'JavaScript权威指南(第6版)',
        src: 'JavaScript_The_Definitive_Guide.jpg',
        link: 'https://www.amazon.cn/dp/B007VISQ1Y',
        tag: 'JavaScript'
    }, {
        name: '你不知道的JavaScript(上卷)',
        src: 'You_Don\'t_Know_JS-1.jpg',
        link: 'https://www.amazon.cn/dp/B00W34DZ8K',
        tag: 'JavaScript'
    }, {
        name: '你不知道的JavaScript(中卷)',
        src: 'You_Don\'t_Know_JS-2.jpg',
        link: 'https://www.amazon.cn/dp/B01LMYXGAI',
        tag: 'JavaScript'
    }, {
        name: '你不知道的JavaScript(下卷)',
        src: 'You_Don\'t_Know_JS-3.jpg',
        link: 'https://www.amazon.cn/dp/B078FFX7YS',
        tag: 'JavaScript'
    }, {
        name: 'ES6标准入门(第3版)',
        src: 'ECMAScript_6_Primer.jpg',
        link: 'https://www.amazon.cn/dp/B0755547ZZ',
        tag: 'JavaScript'
    }, {
        name: '深入理解ES6',
        src: 'Understanding_ecmascript_6.jpg',
        link: 'https://www.amazon.cn/dp/B071GW3JDP',
        tag: 'JavaScript'
    }, {
        name: '深入浅出Node.js',
        src: 'Head_First_Node.js.jpg',
        link: 'https://www.amazon.cn/dp/B00GOM5IL4',
        tag: 'Node.js'
    }, {
        name: 'CSS权威指南(第3版)',
        src: 'CSS_The_Definitive_Guide.jpg',
        link: 'https://www.amazon.cn/dp/B0011F5SIC',
        tag: 'CSS'
    }, {
        name: 'JavaScript语言精粹(修订版)',
        src: 'JavaScript_The_Good_Parts.jpg',
        link: 'https://www.amazon.cn/dp/B0097CON2S',
        tag: 'JavaScript'
    }, {
        name: '高性能JavaScript',
        src: 'High_Performance_JavaScript.jpg',
        link: 'https://www.amazon.cn/dp/B013SGB2AO',
        tag: 'JavaScript'
    }, {
        name: '深入理解JavaScript',
        src: 'Speaking_JavaScript_an_in-depth_Guide.jpg',
        link: 'https://www.amazon.cn/dp/B019WODCSQ',
        tag: 'JavaScript'
    }, {
        name: '编写可维护的JavaScript',
        src: 'Maintainable_JavaScript.jpg',
        link: 'https://www.amazon.cn/dp/B00BQ7RMW0',
        tag: 'JavaScript'
    }, {
        name: 'Php和Mysql Web开发(原书第4版)',
        src: 'PHP_and_MySQL_Web_Development.jpg',
        link: 'https://www.amazon.cn/dp/B001TDLD80',
        tag: 'PHP'
    }, {
        name: 'Python编程 从入门到实践',
        src: 'Python_Crash_Course.jpg',
        link: 'https://www.amazon.cn/dp/B01ION3VWI',
        tag: 'Python'
    }, {
        name: 'Python基础教程(第2版)(修订版)',
        src: 'Beginning_Python.jpg',
        link: 'https://www.amazon.cn/dp/B00KAFX65Q',
        tag: 'Python'
    }, {
        name: 'Python核心编程(第2版) ',
        src: 'Core_Python_Programming.jpg',
        link: 'https://www.amazon.cn/dp/B001BKVXOA',
        tag: 'Python'
    }, {
        name: '流畅的Python',
        src: 'Fluent_Python.jpg',
        link: 'https://www.amazon.cn/dp/B072HMKKPG',
        tag: 'Python'
    }, {
        name: '计算机网络(第6版)',
        src: 'Computer_Networks(xiexiren).jpg',
        link: 'https://www.amazon.cn/dp/B01N0SKRLO',
        tag: 'Network'
    }, {
        name: '算法(第4版)',
        src: 'Algorithms(Fourth Edition).jpg',
        link: 'https://www.amazon.cn/dp/B009OCFQ0O',
        tag: 'Algorithm'
    }
];

export const BooksReading = [
    {
        name: 'CSS揭秘',
        src: 'CSS_Secrets.jpg',
        link: 'https://www.amazon.cn/dp/B01ET3FO86',
        tag: 'CSS'
    }, {
        name: 'JavaScript函数式编程',
        src: 'Functional_JavaScript.jpg',
        link: 'https://www.amazon.cn/dp/B01264FOY4',
        tag: 'JavaScript'
    }, {
        name: 'HTTP权威指南',
        src: 'Http_The_Definitive_Guide.jpg',
        link: 'https://www.amazon.cn/dp/B008XFDQ14',
        tag: 'Network'
    }, {
        name: 'Ruby元编程(第2版)',
        src: 'Metaprogramming_Ruby_2.jpg',
        link: 'https://www.amazon.cn/dp/B013QMKP80',
        tag: 'Ruby'
    }, {
        name: '深入理解计算机系统(原书第3版)',
        src: 'CSAPP.jpg',
        link: 'https://www.amazon.cn/dp/B01N03IQK4',
        tag: 'Basic'
    }
];

export const BooksToRead = [
    {
        name: '计算机程序的构造和解释(原书第2版)',
        src: 'SICP.jpg',
        link: 'https://www.amazon.cn/dp/B0011AP7RY',
        tag: 'Basic'
    }, {
        name: 'Java核心技术(卷2):高级特性(原书第10版)',
        src: 'CoreJava-2.jpg',
        link: 'https://www.amazon.cn/dp/B075VVPLG8',
        tag: 'Java'
    }, {
        name: 'Java编程思想(英文版•第4版)',
        src: 'Thinking_in_JAVA.jpg',
        link: 'https://www.amazon.cn/dp/B0011C3CVA',
        tag: 'Java'
    }, {
        name: '算法导论(原书第3版)',
        src: 'Introduction_to_Algorithms.jpg',
        link: 'https://www.amazon.cn/dp/B00AK7BYJY',
        tag: 'Algorithm'
    }, {
        name: '离散数学及其应用(英文版·第7版)',
        src: 'Discrete_Mathematics_and_Its_Applications.jpg',
        link: 'https://www.amazon.cn/dp/B00A6J72NI',
        tag: 'Basic'
    }, {
        name: '编译原理(英文版•第2版)',
        src: 'Compilers_Principles_Techniques_and_Tools.jpg',
        link: 'https://www.amazon.cn/dp/B004IPRAGA',
        tag: 'Compiler'
    }, {
        name: 'C++ Primer(英文版)(第5版)',
        src: 'C++_Primer.jpg',
        link: 'https://www.amazon.cn/dp/B00CE43I04',
        tag: 'C++'
    }, {
        name: '精通正则表达式(第3版)',
        src: 'Mastering_Regualar_Expressions.jpg',
        link: 'https://www.amazon.cn/dp/B008UCHA58',
        tag: 'RE'
    }
];
interface User {

}

var secho: User;


interface StringRegexDictinoary {
    [key: string]: RegExp,
}

var obj: StringRegexDictinoary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

Object.keys(obj).forEach(()=>{});

interface Person {

}

interface Hero extends Person {
    
}
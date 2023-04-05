import App from "./App.mjs";
import Reader from "./Reader.mjs";
import Parser from "./Parser.mjs";
import Writer from "./Writer.mjs";

let reader = new Reader();
let parser = new Parser();
let writer = new Writer();


let input = "--foo --bar baz secondstring --number 1 --1 12340823051203 --wrong abedof";
//let input = ["--foo","--bar", "baz", "--number 1 35 --marko 1234 --over " ];
//let input = [["--foo","--bar"],[ "baz", "--number 1"]];

let result = new App(input, reader, parser, writer).run();  

console.log(result);


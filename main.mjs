import Parser from "./Parser.mjs";
import Reader from "./Reader.mjs";
import Writer from "./Writer.mjs";

let input = "--foo --bar baz secondstring --number 1 --1 12340823051203 --wrong abedof";
//let input = ["--foo","--bar", "baz", "--number 1 35 --marko 1234 --over " ];
//let input = [["--foo","--bar"],[ "baz", "--number 1"]];

let cache = [input];
let reader = new Reader(cache[0]);
let parser = new Parser();
let writer = new Writer();

cache.unshift(reader.formatInputBlock());
cache.unshift(parser.checkForMissingValues(cache[0]));
cache.unshift(writer.writePairsToObject(cache[0]));

//console.log(cache);

let result =  cache[0];    

console.log(result);


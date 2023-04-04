import Parser from "./Parser.mjs";
import Reader from "./Reader.mjs";
import Writer from "./Writer.mjs";

let parser = new Parser();
let writer = new Writer();

//let input = "--foo --bar baz --number 1";
let input = ["--foo","--bar", "baz", "--number 1"];
let reader = new Reader(input);
//let input = [["--foo","--bar"],[ "baz", "--number 1"]];

/*
let result =    writer.writePairsToObject( 
                parser.checkForMissingValues(
                reader.splitSubstringAtSpaces(
                reader.splitStringAtDashes( 
                reader.checkIfStringOrArray(input))))
);*/

let result = reader.processInput();

console.log(result);

import App from './App/App.mjs';
import Reader from './App/Reader.mjs';
import Parser from './App/Parser.mjs';
import Writer from './App/Writer.mjs';

//import { testData } from "./jest-tests/dummyData/dummyData.mjs";

let reader = new Reader();
let parser = new Parser();
let writer = new Writer();

let input =
  '--foo --bar baz second string --number 1 --1 12340 8230 51 203 --wrong abedof';
// let input = [
//   '--foo',
//   '--bar',
//   'baz',
//   '--number',
//   '1',
//   '35',
//   '--marko',
//   '1234',
//   '--over ',
// ];
// let input = [
//   ['--foo', '--bar'],
//   ['baz', '--number 1'],
// ];

//console.log(testData);

let result = new App(input, reader, parser, writer).run();

console.log(result.outputString);
console.log(result.outputObject);

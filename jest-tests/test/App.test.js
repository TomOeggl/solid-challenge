import App from "../../App/App.mjs";
import testData from "../dummyData/dummyData.mjs"
import Reader from "../../App/Reader.mjs";
import Parser from "../../App/Parser.mjs";
import Writer from "../../App/Writer.mjs";


describe(`When the App class is called and
 passed an input as an array, 
 it should parse it and return a json object`, () => {
    let testInput = testData[-1];
    let expectedResult = testData[0];

    let reader = new Reader();
    let parser = new Parser();  
    let writer = new Writer();

    let appResult = new App(testInput, reader, parser, writer).run(); 


    expect(appResult).toBe(expectedResult);
  });
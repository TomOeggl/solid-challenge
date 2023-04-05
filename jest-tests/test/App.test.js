//const { App, Reader, Parser, Writer } = import("../codebase.mjs");

import testData from "../dummyData/dummyData.mjs"
import App from "../../App/App.mjs";
import Reader from "../../App/Reader.mjs";
import Parser from "../../App/Parser.mjs";
import Writer from "../../App/Writer.mjs";



test(`When the App class is called and
 passed an input as an array, 
 it should parse it and return a json object`, () => {
    let testInput = testData[testData.length-1]; 
    let expectedResult = JSON.stringify(testData[0]);
    
    
    

    let reader = new Reader();
    let parser = new Parser();  
    let writer = new Writer();

    let appResult = new App(testInput, reader, parser, writer).run(); 
    appResult = JSON.stringify(appResult);
   


    expect(appResult).toBe(expectedResult);
  });
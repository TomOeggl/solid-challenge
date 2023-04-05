import Parser from "./Parser.mjs";
import Reader from "./Reader.mjs";
import Writer from "./Writer.mjs";


export default class App{
        constructor(input){
            this.cache = [input];
            this.reader = new Reader(this.cache[0]);
            this.parser = new Parser();
            this.writer = new Writer();
            this.result = {};
        }

        run(){
            this.cache.unshift(this.reader.formatInputBlock());
            this.cache.unshift(this.parser.checkForMissingValues(this.cache[0]));
            this.cache.unshift(this.writer.writePairsToObject(this.cache[0]));
            this.result = this.cache[0];
            return this.result;
        }

}


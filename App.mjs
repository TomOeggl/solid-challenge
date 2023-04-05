
export default class App{
        constructor(input, reader, parser, writer){
            this.cache = [input];
            this.reader = reader;
            this.parser = parser;
            this.writer = writer;
            this.result = {};
        }

        run(){
            this.cache.unshift(this.reader.formatInputBlock(this.cache[0]));
            this.cache.unshift(this.parser.checkForMissingValues(this.cache[0]));
            this.cache.unshift(this.writer.writePairsToObject(this.cache[0]));
            this.result = this.cache[0];
            return this.result;
        }

}


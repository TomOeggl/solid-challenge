 class App{
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

class Reader {
    constructor(){
      this.cache = [];
    }
  
    formatInputBlock(input){
        this.cache[0] = input;
        if(this.isArray()){
          this.transformToString();
        }
        this.splitStringAtDashes();
        this.splitSubstringAtSpaces();
        return this.cache[0];
    }
  
    isArray() {
      return Array.isArray(this.cache[0]);
    }
    
    transformToString() {
      let string = this.cache[0].join(" ");
      this.cache.unshift(string);
    }
    
    splitStringAtDashes() {
      let splitInput = this.cache[0].split("--");
      splitInput.shift();
      this.cache.unshift(splitInput);
    }
    
    splitSubstringAtSpaces() {
      let noSpaceSplitInput = [];
      for (let i = 0; i < this.cache[0].length; i++) {
        let key = this.cache[0][i].split(" ").splice(0,1);
        let value = this.cache[0][i].split(" ").splice(1).join(" ");
        let keyValuePair = [key, value];
        noSpaceSplitInput.push(keyValuePair);
      }
      this.cache.unshift(noSpaceSplitInput);
    }
  
  }
  
class Parser{
    
    checkForMissingValues(input){
        let ensuredPairArray = [];
        input.forEach(pair => {
            pair[1] = this.isMissingValue(pair[1]);
            pair[1] = this.isInt(pair[1]);
            ensuredPairArray.push(pair);
        });
        return ensuredPairArray;
    }
    
    isInt(value){
        let tryInt = parseInt(value);
        if(!isNaN(tryInt)){
            return tryInt
        } else {
            return value
            };
    }
    isMissingValue(value){
        if(value === "" || value === undefined){
            return true
        } else {
            return value
        };
    }
}

class Writer{
    writePairsToObject(input){
        let jsonObject = {};
        input.forEach(pair => {
            jsonObject[pair[0]] = pair[1];      
        });
       
        return jsonObject;
    }

}

module.exports = {
    App,
    Reader,
    Parser,
    Writer
}
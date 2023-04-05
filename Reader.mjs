export default class Reader {
  constructor(input){
    this.cache = [input];
  }

  formatInputBlock(){
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
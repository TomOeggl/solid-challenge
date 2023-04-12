export default class Reader {
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
    this.cache[0].forEach((keyValueCombo) => {
      let key = keyValueCombo.split(" ").splice(0,1);
      let value = keyValueCombo.split(" ").splice(1).join(" ");
      let keyValuePair = [key, value];
      noSpaceSplitInput.push(keyValuePair);
    });
    this.cache.unshift(noSpaceSplitInput);
  }

}

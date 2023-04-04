export default class Reader {
  constructor(input){
   this.input = input;
  }

  processInput(){
      let data = this.input;
      console.log(this.input);
      if (this.isArray()){
          this.input = this.transformToString(this.input);
      }
      let splitString = this.splitStringAtDashes();
      return this.splitSubstringAtSpaces(splitString);
  }
  splitStringAtDashes() {
    console.log("really  "+this.input);
    let splitInput = this.input.split("--");
    splitInput.spli("--");
    splitInput.shift();
    this.input = splitInput;
  }
  splitSubstringAtSpaces(input) {
    let noSpaceSplitInput = [];
    
    for (let i = 0; i < this.input.length; i++) {
      noSpaceSplitInput.push(this.input[i].split(" ", 2));
    }
    this.input = noSpaceSplitInput;
  }

  isArray() {
    return Array.isArray(this.input);
  }
  
  transformToString() {
    let result = this.input.join(" ");
    this.input = result;
  }

}

export default class Reader {
  constructor(input){
   this.input = input;
  }

  processInput(){
      let data = this.input;
      console.log(this.input);
      if (this.isArray()){
          data = this.transformToString();
      }
      this.splitStringAtDashes();
      this.splitSubstringAtSpaces();
      return this.input;
  }
  splitStringAtDashes() {
    console.log("start splitStringAtDashes: "+this.input);
    let splitInput = [];
    splitInput = this.input.split("--");
    //splitInput.split("--");
    splitInput.shift();
    this.input = splitInput;
    
  }
  splitSubstringAtSpaces() {
    let noSpaceSplitInput = [];
    console.log("start splitSubstringAtSpaces: "+this.input);
    for (let i = 0; i < this.input.length; i++) {
      noSpaceSplitInput.push(this.input[i].split(" ", 2));
    }
    this.input = noSpaceSplitInput;
    console.log("end splitSubstringAtSpaces: "+this.input);
  }

  isArray() {
    return Array.isArray(this.input);
  }
  
  transformToString() {
    console.log("transformToString: " + this.input)
    let result = this.input.join(" ");
    this.input = result;
    console.log("transformToString: " + this.input)
  }

}

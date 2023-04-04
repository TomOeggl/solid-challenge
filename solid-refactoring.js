
//let chain = "--foo --bar baz --number 1 --end";
let chain = "--foo --bar baz --number 1"


class ReadInput {
    read(input){
        throw new Error ("You have to implement the read method.");
    }
}

class ReadWholeChain extends ReadInput {
    read(input){
        let splitInput = input.split("--");
        splitInput.shift();
        return splitInput;
    }
}

class ReadRawPair extends ReadInput{
    read(input){
        let noSpaceSplitInput = [];

        for (let i = 0; i < input.length; i++){ noSpaceSplitInput.push (input[i].split(" ", 2));}
        return noSpaceSplitInput;
    }
}

class ReadNoSpacePair extends ReadInput{
    read(input){
        let ensuredPairArray = [];
        ensuredPairArray.forEach(pair => {
            if(pair[1] === "") pair[1] = true; 
            if(pair[1] === undefined) pair[1] = true; 
            result.push(pair);
        });
        return ensuredPairArray;
        
    }
}

class WriteOutputToTarget{
    write(pairsArray, outputTarget){
        throw new Error ("You have to implement the write method.");
    }
}

class WritePairsToJSONObject extends WriteOutputToTarget{
    write(pairsArray, outputTarget){
        pairsArray.forEach(pair => {
            outputTarget[pair[0]] = outputTarget[pair[1]];
        });
    }
}



let splitChain = chain.split("--");

splitChain.shift();

console.log("splitchain is: ");
console.log(splitChain);


let noSpaceSplitChain = [];

for (let i = 0; i < splitChain.length; i++){ noSpaceSplitChain.push (splitChain[i].split(" ", 2));}

let result = [];


console.log("noSpaceSplitChain is: ");
console.log(noSpaceSplitChain);

noSpaceSplitChain.forEach(pair => {
    //if(pair[1] === ""){pair[1] = undefined}
    if(pair[1] === "") pair[1] = true; 
    if(pair[1] === undefined) pair[1] = true; 
    result.push(pair);
});



console.log("your result is: ");
console.log(result);
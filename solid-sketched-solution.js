
//let chain = "--foo --bar baz --number 1 --end";
let chain = "--foo --bar baz --number 1"

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

//your result is: 
//[ [ 'foo', true ], [ 'bar', 'baz' ], [ 'number', '1' ] ]
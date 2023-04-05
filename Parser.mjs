export default class Parser{
    
    checkForMissingValues(input){
        let ensuredPairArray = [];
        input.forEach(pair => {
            if(pair[1] === "") pair[1] = true; 
            if(pair[1] === undefined) pair[1] = true; 
            let tryInt = parseInt(pair[1]);
            if(!isNaN(tryInt)){pair[1] = tryInt};
            ensuredPairArray.push(pair);
        });
        return ensuredPairArray;
    }
    
}
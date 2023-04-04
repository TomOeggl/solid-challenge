export default class Parser{
    
    checkForMissingValues(input){
        let ensuredPairArray = [];
        input.forEach(pair => {
            if(pair[1] === "") pair[1] = true; 
            if(pair[1] === undefined) pair[1] = true; 
            ensuredPairArray.push(pair);
        });
        return ensuredPairArray;
    }
    
}
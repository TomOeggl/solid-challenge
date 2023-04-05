export default class Parser{
    
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
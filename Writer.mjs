export default class Writer{
    writePairsToObject(input){
        let jsonObject = {};
        input.forEach(pair => {
            jsonObject[pair[0]] = pair[1];      
        });
      
        return jsonObject;
    }

}
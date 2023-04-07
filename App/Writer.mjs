export default class Writer {
  writePairsToObject(input) {
    let jsonObject = {};
    input.forEach(pair => {
      jsonObject[pair[0]] = pair[1];
    });

    return jsonObject;
  }

  writePairsToString(input) {
    let string = '';
    input.forEach(pair => {
      let prefix = '-';
      let key = '';
      let value = '';
      value += this.listingSubElements(pair[1]);
      key = prefix + pair[0] + ':\n';
      string += key + value;
    });
    return string;
  }

  listingSubElements(pairValue) {
    let result = '';
    if (Array.isArray(pairValue)) {
      pairValue.forEach(element => {
        result += element + '\n';
      });
    } else {
      result += pairValue + '\n';
    }
    return result;
  }
}

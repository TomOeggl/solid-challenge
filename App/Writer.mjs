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

      if (Array.isArray(pair[1])) {
        pair[1].forEach(element => {
          value += element + '\n';
        });
      } else {
        value = pair[1] + '\n';
      }
      key = prefix + pair[0] + ':\n';
      string += key + value;
    });
    return string;
  }
}

export default class Parser {
  checkForMissingValues(input) {
    let ensuredPairArray = [];
    input.forEach(pair => {
      pair[1] = this.isCompositeString(pair[1]);

      if (pair[1].length > 1) {
        let compositeValue = [];

        pair[1].forEach(value => {
          value = this.isInt(value);
          compositeValue.push(value);
        });
        pair[1] = compositeValue;
      } else {
        pair[1] = this.isInt(pair[1]);
        pair[1] = this.isMissingValue(pair[1][0]);
      }
      ensuredPairArray.push(pair);
      console.log(pair);
    });
    return ensuredPairArray;
  }

  isInt(value) {
    let tryInt = parseInt(value);
    if (!isNaN(tryInt)) {
      return tryInt;
    } else {
      return value;
    }
  }

  isMissingValue(value) {
    if (value === '' || value === undefined) {
      return true;
    } else {
      return value;
    }
  }

  isCompositeString(value) {
    let valueArray = value.split(' ');
    if (valueArray.length > 1) {
      valueArray = valueArray.filter(str => str !== '');
    }
    return valueArray;
  }
}

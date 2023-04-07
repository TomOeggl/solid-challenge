export default class Parser {
  parseArray(input) {
    let ensuredPairArray = this.createCompositeArray(input);
    return ensuredPairArray;
  }

  createCompositeArray(input) {
    let newArray = [];
    input.forEach(pair => {
      pair[1] = this.splitToSubArray(pair[1]);
      this.checkCompositeArray(pair);
      newArray.push(pair);
    });
    return newArray;
  }

  checkCompositeArray(pair) {
    if (pair[1].length > 1) {
      pair[1] = this.postCompositeValueToArray(pair[1]);
    } else {
      pair[1] = this.isInt(pair[1]);
      pair[1] = this.isMissingValue(pair[1][0]);
    }
    return pair;
  }

  postCompositeValueToArray(value) {
    const compositeValue = [];
    value.forEach(element => {
      element = this.isInt(element);
      compositeValue.push(element);
    });
    return compositeValue;
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

  splitToSubArray(value) {
    let valueArray = value.split(' ');
    if (valueArray.length > 1) {
      valueArray = valueArray.filter(str => str !== '');
    }
    return valueArray;
  }
}

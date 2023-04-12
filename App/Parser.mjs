export default class Parser {

  parseArray(input) {
    let parsedArray = [];
    let value = 1;
    input.forEach((pair) => {
      pair[value] = this.splitToSubArray(pair[value]);
      if (this.isCompositeValue(pair[value])) {
        pair[value] = this.applyCompositeValueRules(pair[value]);
      } else {
        pair[value] = this.applySingleValueRules(pair[value]);
      }
      parsedArray.push(pair);
    });
    return parsedArray;
  }

  isCompositeValue(value) {
    return value.length > 1;
  }

  applyCompositeValueRules(value) {
    const compositeValue = [];
    value.forEach((element) => {
      element = this.tryParseInt(element);
      compositeValue.push(element);
    });
    return compositeValue;
  }

  applySingleValueRules(value) {
    value = this.tryParseInt(value);
    value = this.fillEmptyValue(value[0]);
    return value;
  }

  tryParseInt(value) {
    let tryInt = parseInt(value);
    if (!isNaN(tryInt)) {
      return tryInt;
    } else {
      return value;
    }
  }

  fillEmptyValue(value) {
    if (value === "" || value === undefined) {
      return true;
    } else {
      return value;
    }
  }

  splitToSubArray(value) {
    let valueArray = value.split(" ");
    if (valueArray.length > 1) {
      valueArray = valueArray.filter((str) => str !== "");
    }
    return valueArray;
  }
}

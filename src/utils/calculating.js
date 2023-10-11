function getDecimalCount(num) {
  if (Number.isInteger(num)) {
    return 0;
  } else {
    const decimalPart = num.toString().split('.')[1];
    return decimalPart ? decimalPart.length : 0;
  }
}

function toRpn(statement) {
  const statementArr = statement.match(/[+\-*/()]|\d+\.\d+|\d+/g);
  let result = [];
  let stack = [];

  const operators = {
    '+': 0,
    '-': 0,
    '*': 1,
    '/': 1,
    '^': 2,
  };

  for (let i = 0; i < statementArr.length; ++i) {
    const character = statementArr[i];

    if (!isNaN(Number(character))) {
      result.push(character);
    } else if (character === '(') {
      stack.push(character);
    } else if (character === ')') {
      let s = stack.pop();

      while (s && s !== '(') {
        result.push(s);
        s = stack.pop();
      }
    } else if (Object.keys(operators).indexOf(character) >= 0) {
      while (operators[stack.slice(-1)[0]] >= operators[character]) {
        result.push(stack.pop());
      }

      stack.push(character);
    }
  }

  let sum = '';

  while ((sum = stack.pop())) {
    result.push(sum);
  }

  return result;
}

function evaluate(expression) {
  const tokens = toRpn(expression);
  const stack = [];

  for (const token of tokens) {
    if (!isNaN(parseFloat(token))) {
      stack.push(parseFloat(token));
    } else {
      const operand2 = stack.pop();
      const operand1 = stack.pop();

      switch (token) {
        case '+':
          stack.push(operand1 + operand2);
          break;
        case '-':
          stack.push(operand1 - operand2);
          break;
        case '*':
          stack.push(operand1 * operand2);
          break;
        case '/':
          stack.push(operand1 / operand2);
          break;
        default:
          throw new Error(`Uncorrected operator: ${token}`);
      }
    }
  }

  if (stack.length !== 1) {
    throw new Error('Uncorrected expression');
  }

  return `${stack[0]}`;
}

export { evaluate, toRpn, getDecimalCount };

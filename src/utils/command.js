import { evaluate } from './calculating';

class Command {
  constructor(app, calculator) {
    this.app = app;
    this.calculator = calculator;
  }

  undo() {
    this.calculator.currentExpression = this.calculator.currentExpression.slice(0, -1);
  }

  execute() {
    throw new Error('Abstract method execute() must be overridden');
  }
}

class Calculator {
  constructor() {
    this.currentExpression = '';
    this.openParenthesesCount = 0;
  }

  getLastNumber() {
    const regex = /[+\-*/]?\d+(\.\d+)?$/;
    const match = this.currentExpression.match(regex);
    return match ? match[0] : '';
  }

  addDigit(digit) {
    // if (this.commandHistory.at(-1) instanceof CalculateCommand) {
    //   this.currentExpression = digit;
    //   return;
    // }

    const lastNumber = this.getLastNumber();

    if (digit === '.') {
      if (lastNumber.includes('.')) {
        return;
      }

      if (!lastNumber) {
        this.currentExpression += '';
      }
    }

    this.currentExpression += digit;
  }

  addOperator(operator) {
    const lastChar = this.currentExpression.slice(-1);

    if (['+', '-', '*', '/'].includes(lastChar)) {
      this.currentExpression = this.currentExpression.slice(0, -1) + operator;
      return;
    }

    this.currentExpression += operator;
  }

  openParenthesis() {
    this.currentExpression += '(';
    this.openParenthesesCount += 1;
  }

  closeParenthesis() {
    if (this.openParenthesesCount > 0) {
      this.currentExpression += ')';
      this.openParenthesesCount -= 1;
    }
  }

  calculate() {
    try {
      this.currentExpression = evaluate(this.currentExpression);
    } catch (error) {
      console.error(`Error calculating expression: ${error}`);
      this.currentExpression = 'Error';
    }
  }
}

class AddDigitCommand extends Command {
  constructor(app, calculator, digit) {
    super(app, calculator);
    this.digit = digit;
  }

  execute() {
    this.calculator.addDigit(this.digit);
    return true;
  }
}

class AddOperatorCommand extends Command {
  constructor(app, calculator, operator) {
    super(app, calculator);
    this.operator = operator;
  }

  execute() {
    this.calculator.addOperator(this.operator);
    return true;
  }
}

class OpenParenthesisCommand extends Command {
  constructor(app, calculator) {
    super(app, calculator);
  }

  execute() {
    this.calculator.openParenthesis();
    return true;
  }
}

class CloseParenthesisCommand extends Command {
  constructor(app, calculator) {
    super(app, calculator);
  }

  execute() {
    this.calculator.closeParenthesis();
    return true;
  }
}

class CalculateCommand extends Command {
  constructor(app, calculator) {
    super(app, calculator);
  }

  execute() {
    this.calculator.calculate();
    return true;
  }
}

class UndoCommand extends Command {
  constructor(app, calculator) {
    super(app, calculator);
  }

  execute() {
    this.app.undo();
    return false;
  }
}

class Application {
  constructor(calculator) {
    this.calculator = calculator;
    this.history = [];
  }

  executeCommand(command) {
    if (command.execute()) {
      this.history.push(command);
    }

    return this.calculator.currentExpression;
  }

  undo() {
    const command = this.history.pop();

    if (command) {
      command.undo();
    }

    return this.calculator.currentExpression;
  }
}

export {
  Application,
  Calculator,
  AddDigitCommand,
  AddOperatorCommand,
  OpenParenthesisCommand,
  CloseParenthesisCommand,
  CalculateCommand,
  UndoCommand,
};

import { evaluate, getDecimalCount } from './calculating';

class Command {
  constructor(app, calculator) {
    this.app = app;
    this.calculator = calculator;
    this.backup = '';
  }

  saveBackup() {
    this.backup = this.calculator.currentExpression;
  }

  undo() {
    this.calculator.currentExpression = this.backup;
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

  addDigit(digit) {
    this.currentExpression += digit;
  }

  addDot(value) {
    const parsedExpression = this.currentExpression.split(/\s*([+\-*/])\s*/);
    const lastNumber = parsedExpression[parsedExpression.length - 1];

    if (lastNumber && lastNumber.indexOf('.') >= 0) {
      return false;
    }

    this.currentExpression += value;
    return true;
  }

  addOperator(operator) {
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

  clear() {
    this.currentExpression = '';
    this.openParenthesesCount = 0;
  }

  calculate() {
    try {
      if (!this.currentExpression) {
        return;
      }

      while (this.openParenthesesCount !== 0) {
        this.currentExpression += ')';
        this.openParenthesesCount -= 1;
      }

      const result = evaluate(this.currentExpression);
      const decimalCount = getDecimalCount(result);

      this.currentExpression = decimalCount <= 3 ? result : parseFloat(result).toFixed(3);
    } catch (error) {
      window.alert('Incorrect expression');
      console.error(`Error calculating expression: ${error}`);
      this.currentExpression = '';
    }
  }
}

class DigitCommand extends Command {
  constructor(app, calculator, digit) {
    super(app, calculator);
    this.digit = digit;
  }

  execute() {
    this.saveBackup();
    this.calculator.addDigit(this.digit);
    return true;
  }
}

class DotCommand extends Command {
  execute() {
    this.saveBackup();

    const command = this.app.history.getLast();

    if (!command || command instanceof OperatorCommand) {
      return this.calculator.addDot('0.');
    }

    return this.calculator.addDot('.');
  }
}

class OperatorCommand extends Command {
  constructor(app, calculator, operator) {
    super(app, calculator);
    this.operator = operator;
  }

  execute() {
    const command = this.app.history.getLast();

    if (command instanceof OperatorCommand) {
      this.app.undo();
    }

    this.saveBackup();
    this.calculator.addOperator(this.operator);
    return true;
  }
}

class OpenParenthesisCommand extends Command {
  execute() {
    const command = this.app.history.getLast();

    if (!command || command instanceof OperatorCommand || command instanceof OpenParenthesisCommand) {
      this.saveBackup();
      this.calculator.openParenthesis();
      return true;
    }

    return false;
  }
}

class CloseParenthesisCommand extends Command {
  execute() {
    this.saveBackup();
    this.calculator.closeParenthesis();
    return true;
  }
}

class CalculateCommand extends Command {
  execute() {
    this.saveBackup();
    this.calculator.calculate();

    if (this.calculator.currentExpression) {
      this.app.history.reset(new DigitCommand(this.app, this.calculator, this.calculator.currentExpression));
    }

    return false;
  }
}

class ClearCommand extends Command {
  execute() {
    this.calculator.clear();
    this.app.history.reset();
    return false;
  }
}

class UndoCommand extends Command {
  execute() {
    this.app.undo();
    return false;
  }
}

class CommandHistory {
  constructor() {
    this.history = [];
  }

  getLast() {
    return this.history[this.history.length - 1];
  }

  reset(command) {
    if (command) {
      this.history = [command];
      return;
    }
    this.history = [];
  }

  push(command) {
    if (command) {
      this.history.push(command);
    }
  }

  pop() {
    return this.history.pop();
  }
}

class Application {
  constructor(calculator, history) {
    this.calculator = calculator;
    this.history = history;
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
  CommandHistory,
  ClearCommand,
  Calculator,
  DigitCommand,
  DotCommand,
  OperatorCommand,
  OpenParenthesisCommand,
  CloseParenthesisCommand,
  CalculateCommand,
  UndoCommand,
};

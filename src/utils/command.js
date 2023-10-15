import { changeExpression } from '@/store/actions/expressionActions';
import { addExpression } from '@/store/actions/historyActions';
import { evaluate, getDecimalCount, splitExpression } from './calculating';

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
    this.error = false;
    this.openParenthesesCount = 0;
  }

  addDigit(digit) {
    if (this.currentExpression === '') {
      if (digit === '0') {
        return;
      }
    }

    this.currentExpression += digit;
  }

  addDot(value) {
    const parsedExpression = splitExpression(this.currentExpression);
    const lastNumber = parsedExpression[parsedExpression.length - 1];

    if (lastNumber && lastNumber.indexOf('.') >= 0) {
      return;
    }

    this.currentExpression += value;
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
      const resultNum = evaluate(this.currentExpression);

      this.currentExpression = getDecimalCount(resultNum) <= 3 ? resultNum : parseFloat(resultNum).toFixed(3);
      return true;
    } catch (error) {
      alert(error);
      return false;
    }
  }
}

class DigitCommand extends Command {
  constructor(app, calculator, digit) {
    super(app, calculator);
    this.digit = digit;
  }

  execute() {
    if (this.app.history.isEmpty() && this.calculator.currentExpression) {
      this.calculator.currentExpression = '';
    }

    this.saveBackup();
    this.calculator.addDigit(this.digit);
    this.backup !== this.calculator.currentExpression && this.app.history.push(this);
  }
}

class DotCommand extends Command {
  execute() {
    this.saveBackup();

    if (this.app.history.isEmpty()) {
      const value =
        this.calculator.currentExpression === '0' || this.calculator.currentExpression === ''
          ? 0
          : this.calculator.currentExpression;
      this.app.executeCommand(new DigitCommand(this.app, this.calculator, value));
    }

    const command = this.app.history.getLast();
    const value = !command || command instanceof OperatorCommand ? '0.' : '.';

    this.calculator.addDot(value);

    if (this.backup !== this.calculator.currentExpression) {
      this.app.history.push(this);
    }
  }
}

class OperatorCommand extends Command {
  constructor(app, calculator, operator) {
    super(app, calculator);
    this.operator = operator;
  }

  execute() {
    if (this.app.history.getLast() instanceof OpenParenthesisCommand) {
      return;
    }

    if (this.app.history.isEmpty()) {
      const value =
        this.calculator.currentExpression === '0' || this.calculator.currentExpression === ''
          ? 0
          : this.calculator.currentExpression;
      this.app.executeCommand(new DigitCommand(this.app, this.calculator, value));
    }

    if (this.app.history.getLast() instanceof OperatorCommand) {
      this.app.undo();
    }

    this.saveBackup();
    this.calculator.addOperator(this.operator);
    this.app.history.push(this);
  }
}

class OpenParenthesisCommand extends Command {
  execute() {
    const command = this.app.history.getLast();

    if (this.app.history.isEmpty() && this.calculator.currentExpression) {
      return;
    }

    if (!command || command instanceof OperatorCommand || command instanceof OpenParenthesisCommand) {
      this.saveBackup();
      this.calculator.openParenthesis();
      this.app.history.push(this);
    }
  }
}

class CloseParenthesisCommand extends Command {
  execute() {
    this.saveBackup();
    this.calculator.closeParenthesis();

    this.backup !== this.calculator.currentExpression && this.app.history.push(this);
  }
}

class CalculateCommand extends Command {
  execute() {
    while (this.calculator.openParenthesesCount > 0) {
      this.calculator.closeParenthesis();
    }

    if (!isNaN(this.calculator.currentExpression)) {
      return;
    }

    this.saveBackup();

    if (this.app.history.getLast() instanceof OperatorCommand) {
      this.app.undo();
    }

    if (this.calculator.calculate()) {
      this.app.dispatch(addExpression(splitExpression(this.backup).join(' ')));
    } else {
      this.app.executeCommand(new ClearCommand(this.app, this.calculator));
    }

    this.saveBackup();
    this.app.history.reset();
  }
}

class ClearCommand extends Command {
  execute() {
    this.calculator.clear();
    this.app.history.reset();
  }
}

class UndoCommand extends Command {
  execute() {
    if (this.calculator.currentExpression && this.app.history.isEmpty()) {
      this.calculator.currentExpression = '';
      return;
    }

    this.app.undo();
  }
}

class CommandHistory {
  constructor() {
    this.history = [];
  }

  isEmpty() {
    return this.history.length === 0;
  }

  getLast() {
    return this.history[this.history.length - 1];
  }

  reset() {
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
  constructor(calculator, history, dispatch) {
    this.calculator = calculator;
    this.history = history;
    this.dispatch = dispatch;
  }

  executeCommand(command) {
    if (command) {
      command.execute();
    }

    this.dispatch(changeExpression(this.calculator.currentExpression));
  }

  undo() {
    const command = this.history.pop();

    if (command) {
      command.undo();
    }

    this.dispatch(changeExpression(this.calculator.currentExpression));
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

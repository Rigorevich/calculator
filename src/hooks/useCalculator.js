import { useState, useCallback } from 'react';

import {
  DigitCommand,
  CommandHistory,
  ClearCommand,
  DotCommand,
  UndoCommand,
  CloseParenthesisCommand,
  OpenParenthesisCommand,
  OperatorCommand,
  CalculateCommand,
  Calculator,
  Application,
} from '../utils/command';

const getCommandType = (key, app, calculator) => {
  let newCommand = null;

  if (Number(key) >= 0 && Number(key) <= 9) {
    newCommand = new DigitCommand(app, calculator, key);
  } else if (key === '.') {
    newCommand = new DotCommand(app, calculator);
  } else if (/[+\-*/]/.test(key)) {
    newCommand = new OperatorCommand(app, calculator, key);
  } else if (key === '=') {
    newCommand = new CalculateCommand(app, calculator);
  } else if (key === '(') {
    newCommand = new OpenParenthesisCommand(app, calculator);
  } else if (key === ')') {
    newCommand = new CloseParenthesisCommand(app, calculator);
  } else if (key === 'C') {
    newCommand = new UndoCommand(app, calculator);
  } else if (key === 'CE') {
    newCommand = new ClearCommand(app, calculator);
  }

  return newCommand;
};

const splitExpression = (expression) => expression.split(/\s*([+\-*/])\s*/).join(' ');

export const useCalculator = () => {
  const [calculator] = useState(() => new Calculator());
  const [commandHistory] = useState(() => new CommandHistory());
  const [app] = useState(() => new Application(calculator, commandHistory));
  const [state, setState] = useState(app.calculator.currentExpression);

  const pressKey = useCallback(
    (key) => {
      const command = getCommandType(key, app, calculator);

      if (command) {
        const expression = app.executeCommand(command);
        setState(splitExpression(expression));
      }
    },
    [app, calculator]
  );

  return {
    state,
    pressKey,
  };
};

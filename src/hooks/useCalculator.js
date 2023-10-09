import { useState, useCallback } from 'react';

import {
  AddDigitCommand,
  UndoCommand,
  CloseParenthesisCommand,
  OpenParenthesisCommand,
  AddOperatorCommand,
  CalculateCommand,
  Calculator,
  Application,
} from '../utils/command';

const getCommandType = (key, app, calculator) => {
  let newCommand = null;

  if (key === '.' || /[0-9]/.test(key)) {
    newCommand = new AddDigitCommand(app, calculator, key);
  } else if (/[+\-*/]/.test(key)) {
    newCommand = new AddOperatorCommand(app, calculator, key);
  } else if (key === '=') {
    newCommand = new CalculateCommand(app, calculator);
  } else if (key === '(') {
    newCommand = new OpenParenthesisCommand(app, calculator);
  } else if (key === ')') {
    newCommand = new CloseParenthesisCommand(app, calculator);
  } else if (key === 'C') {
    newCommand = new UndoCommand(app, calculator);
  }

  return newCommand;
};

const splitExpression = (expression) => expression.match(/[+\-*/()]|\d+\.\d*|\d+/g).join(' ');

export const useCalculator = () => {
  const [calculator] = useState(() => new Calculator());
  const [app] = useState(() => new Application(calculator));
  const [state, setState] = useState(app.calculator.currentExpression);

  const pressKey = useCallback(
    (key) => {
      const command = getCommandType(key, app, calculator);

      if (command) {
        const expression = app.executeCommand(command);
        console.log(expression);
        setState(expression ? splitExpression(expression) : expression);
      }
    },
    [state]
  );

  return {
    state,
    pressKey,
  };
};

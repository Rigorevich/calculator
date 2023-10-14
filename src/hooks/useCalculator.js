import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';

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

const getCommand = (key, app, calculator) => {
  let newCommand = null;

  if (Number(key) >= 0 && Number(key) <= 9) {
    newCommand = new DigitCommand(app, calculator, key);
  } else if (key === '.') {
    newCommand = new DotCommand(app, calculator);
  } else if (['+', '-', '*', '/'].indexOf(key) >= 0) {
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

export const useCalculator = () => {
  const dispatch = useDispatch();

  const calculator = useMemo(() => new Calculator(), []);
  const commandHistory = useMemo(() => new CommandHistory(), []);
  const app = useMemo(
    () => new Application(calculator, commandHistory, dispatch),
    [calculator, commandHistory, dispatch]
  );

  const pressKey = useCallback(
    (key) => {
      const command = getCommand(key, app, calculator);

      if (command) {
        app.executeCommand(command);
      }
    },
    [app, calculator]
  );

  return {
    pressKey,
  };
};

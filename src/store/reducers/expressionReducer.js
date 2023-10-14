const expressionReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_EXPRESSION':
      return action.payload;
    default:
      return state;
  }
};

export default expressionReducer;

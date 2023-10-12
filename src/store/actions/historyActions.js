export const toggleSidebar = () => ({
  type: 'TOGGLE_SIDEBAR',
});

export const addExpression = (expression) => ({
  type: 'ADD_EXPRESSION',
  payload: expression,
});

export const clearHistory = () => ({
  type: 'CLEAR_HISTORY',
});

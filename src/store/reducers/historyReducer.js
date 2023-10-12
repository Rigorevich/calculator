const initialState = {
  isOpen: true,
  operations: [],
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return { ...state, isOpen: !state.isOpen };
    case 'ADD_EXPRESSION':
      return { ...state, operations: [...state.operations, action.payload] };
    case 'CLEAR_HISTORY':
      return { ...state, operations: [] };
    default:
      return state;
  }
};

export default historyReducer;

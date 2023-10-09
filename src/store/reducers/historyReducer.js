const initialState = {
  isOpen: true,
  operations: [],
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};

export default historyReducer;

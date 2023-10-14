import { createStore } from 'redux';

import rootReducer from './reducers/rootReducer';

const saveToLocalStorage = (state) => {
  try {
    const dataToSave = {
      theme: state.theme,
      history: state.history,
    };
    const serialisedState = JSON.stringify(dataToSave);
    localStorage.setItem('persistantState', serialisedState);
  } catch (e) {
    console.warn(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem('persistantState');
    if (serialisedState === null) return undefined;
    const loadedData = JSON.parse(serialisedState);
    return {
      theme: loadedData.theme,
      history: loadedData.history,
    };
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

const store = createStore(rootReducer, loadFromLocalStorage());

store.subscribe(() => saveToLocalStorage(store.getState()));

export { store };

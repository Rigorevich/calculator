import { themes } from "../../utils/theme";

const themeReducer = (state = themes.darkTheme, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;

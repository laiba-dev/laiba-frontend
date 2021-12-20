import { MENU_SET_SELECTED } from "../actions/MenuActions";

const initialState = {
  selectedKeys: "1",
};

const MenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENU_SET_SELECTED:
      const newSelectedMenu = { ...state, selectedKeys: action.payload };
      return newSelectedMenu;
    default:
      return state;
  }
};

export default MenuReducer;

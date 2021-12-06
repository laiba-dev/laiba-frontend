export const MENU_SET_SELECTED = "menu/setSelected";

const setSelectedAction = (selectedMenu) => {
  return {
    type: MENU_SET_SELECTED,
    payload: selectedMenu,
  };
};

export const setSelectedMenu = (selectedMenu) => {
  return async (dispatch) => {
    dispatch(setSelectedAction(selectedMenu));
  };
};

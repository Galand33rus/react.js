import {TOGGLE_CHECKBOX} from "./action";

const initialState = {
  checkbox: false,
  name: 'name',
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHECKBOX:
      return {
        ...state,
        checkbox: !state.checkbox
      }
    default:
      return state
  }
};

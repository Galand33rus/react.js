export const getCheckboxValue = (state) => {
  return state.profile.checkbox;
};

export const getName = (state) => {
  return state.profile.name;
};

export const selectAuth = (state) => state.profile.authed;

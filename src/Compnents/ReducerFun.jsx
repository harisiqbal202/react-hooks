const initState = {
  id: "",
  email: "",
  pass: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "email":
      return { ...state, [action.target]: action.value };
    case "password":
      return { ...state, [action.target]: action.value };
    default:
      return state;
  }
}

export { initState, reducer };

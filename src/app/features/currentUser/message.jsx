const initialState = {};

export function messageError(state = initialState, action) {
  if ((action.type === "set_message")) {
    const {message,error } = action.payload
    return {
      message,
      error,
    };
  }
  if ((action.type === "clear_message")) {
    return {
      message: "",
    };
  }
  return state;
}

export const setMessage = (message) => ({
  type: "set_message",
  payload: message,
});

export const clearMessage = () => ({
  type: "clear_message",
});

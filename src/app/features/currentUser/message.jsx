const initialState = {};

export function messageError(state = initialState, action) {
  if ((action.type === "set_message")) {
    console.log("action.payload",action.payload)
    return {
      message: action.payload,
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

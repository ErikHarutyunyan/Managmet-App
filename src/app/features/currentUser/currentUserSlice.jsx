import { loginCurrentUser } from "./currentUserAPI";

// export function currentUserReducer(state = {}, action) {
//   if (action.type === "edit-current-user-name") {
//     return {
//       // ...state karainq sench anenq ete currentUser unenar tariq kam ael info
//       name: action.payload.name
//     };
//   }
//   return state;
// }
// export const initialCurrentUser = {
//   name: "Joe Shmoe"
// };

// export function selectName(state) {
//   return state.currentUser.name;
// }

// editName functian kochvuma action creator
// isk veradardzvox objecte action
// export function editName(newName) {
//   return {
//     type: "edit-current-user-name",
//     payload: {
//       name: newName
//     }
//   };
// }

// dispatch hnaravorutyune talis uxarkel xndranq vorpeszi reducer-nere poxen state
// getState functia e vore veradardznuma verchi state

// himanakanum ete menq tenum enq mi inch vor functia, menq gitenq vor da functia e, baech ete et functia  patatum enq functia-i mech aesiqn et functian karox enq ashxatachnel apagayum et functian kanchelov et functian in anvanum enq "thunks"
// loadUser() functian vore uneq, inqe veradardznuma mi hat functia vore apagayum karox e anel gorchoxutyun  
// dispatch, getState) => {} aes functiain menq anvanum enq "thunks"
export function loginUser(data) {
  return (dispatch, getState) => {
    return loginCurrentUser(data).then((responseUser) => {
      if (tokenData) {
        Cookies.set("auth-token", tokenData);
      } else {
        Cookies.remove("auth-token");
      }
      dispatch(editName(responseUser.data.user))
    })
  }
}
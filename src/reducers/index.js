import data from "../../src/data.json";
const reducer = (
  state = {
    members: data.membersList,
    isAuth: false,
    isAdmin: false,
    loggedMember: "",
    updatingMember: { name: "", id: "", base: "", phone: "", email: "" },
    isAdding: false,
    isUpdating: false,
  },
  action
) => {
  if (action.type === "ADD") {
    return { ...state, members: [...state.members, action.payload] };
  }
  if (action.type === "DELETE") {
    const newMembers = state.members.filter(
      (member) => member !== action.payload
    );
    return { ...state, members: newMembers };
  }
  if (action.type === "MEMBER_LOGIN") {
    return {
      ...state,
      isAdmin: false,
      isAuth: true,
      loggedMember: action.payload,
    };
  }
  if (action.type === "ADMIN_LOGIN") {
    return {
      ...state,
      isAdmin: true,
      isAuth: true,
      loggedMember: action.payload,
    };
  }
  if (action.type === "OPEN_REGISTER_FORM") {
    return {
      ...state,
      isAdding: true,
      isUpdating: false,
      updatingMember: { name: "", id: "", base: "", phone: "", email: "" },
    };
  }
  if (action.type === "OPEN_UPDATE_FORM") {
    return {
      ...state,
      isUpdating: true,
      isAdding: false,
      updatingMember: action.payload,
    };
  }
  if (action.type === "CLOSE_FORM") {
    return {
      ...state,
      isAdding: false,
      isUpdating: false,
      updatingMember: { name: "", id: "", base: "", phone: "", email: "" },
    };
  }

  // if (action.type === "START_UPDATE") {
  //   return {
  //     ...state,
  //     isUpdating: true,
  //     updatingMember: action.payload,
  //   };
  // }
  // if (action.type === "FINISH_UPDATE") {
  //   return {
  //     ...state,
  //     isUpdating: false,
  //     updatingMember: action.payload,
  //   };
  // }
  if (action.type === "LOGOUT") {
    return { ...state, isAuth: false, isAdmin: false };
  }
  return state;
};
export default reducer;

import data from "../../src/data.json";
const reducer = (
  state = {
    members: data.membersList,
    isAuth: false,
    isAdmin: false,
    loggedMember: "",
    updatingMember: {},
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
      (member) => member.id !== action.payload.id
    );
    return { ...state, members: newMembers };
  }
  if (action.type === "LOGIN") {
    return { ...state, isAuth: true, loggedMember: action.payload };
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
    };
  }
  if (action.type === "CLOSE_REGISTER_FORM") {
    return {
      ...state,
      isAdding: false,
    };
  }
  if (action.type === "OPEN_UPDATE_FORM") {
    return {
      ...state,
      isUpdating: true,
      updatingMember: action.payload,
    };
  }
  if (action.type === "CLOSE_UPDATE_FORM") {
    return {
      ...state,
      isUpdating: false,
    };
  }
  if (action.type === "START_UPDATE") {
    return {
      ...state,
      updatingMember: action.payload,
    };
  }
  if (action.type === "FINISH_UPDATE") {
    return {
      ...state,
      updatingMember: action.payload,
    };
  }
  if (action.type === "LOGOUT") {
    return { ...state, isAuth: false, isAdmin: false };
  }
  return state;
};
export default reducer;

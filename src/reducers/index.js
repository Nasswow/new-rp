import data from "../../src/data.json";
const reducer = (
  state = { members: data.membersList, isAuth: false },
  action
) => {
  if (action.type === "ADD") {
    return { members: [...state.members, action.payload] };
  }
  if (action.type === "DELETE") {
    const newMembers = state.members.filter(
      (member) => member.id !== action.payload.id
    );
    return { members: newMembers };
  }
  if (action.type === "LOGIN") {
    return {
      isAuth: true,
    };
  }
  if (action.type === "LOGOUT") {
    return {
      isAuth: false,
    };
  }
  return state;
};
export default reducer;

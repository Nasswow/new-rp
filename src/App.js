import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Members from "./components/members/members";
import Member from "./components/member/member";
import Login from "./components/login/Login";
import data from "../src/data.json";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import MembersList from "./components/members/MembersList";
import DailyInfo from "./components/dailyInfo/DailyInfo";
function App() {
  const isAuth = useSelector((state) => state.isAuth);
  const [members, setMembers] = useState(data.membersList);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [member, setMember] = useState({});
  const [memberSelected, setmemberSelected] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const changeHandler = {
    nameChangeHandler: (e) => {
      setMember({ ...member, name: e.target.value });
    },
    idChangeHandler: (e) => {
      setMember({ ...member, id: e.target.value });
    },
    baseChangeHandler: (e) => {
      setMember({ ...member, base: e.target.value });
    },
    phoneChangeHandler: (e) => {
      setMember({ ...member, phone: e.target.value });
    },
    emailChangeHandler: (e) => {
      setMember({ ...member, email: e.target.value });
    },
  };

  const loginHandler = (needToLog) => {
    if (needToLog === true) {
    }
  };
  const logoutHandler = (auth) => {};
  const adminHandler = (isAdmin) => {
    setIsAdmin(isAdmin);
  };
  const memberSelectHandler = (member) => {
    setmemberSelected(true);
    setMember(member);
  };
  const notMemberHandler = () => {
    setIsAdding(false);
  };
  const backToMembersHandler = () => {
    setmemberSelected(false);
  };
  const addMemberHandler = (newMember) => {
    setMembers((currentMembers) => {
      return [...currentMembers, newMember];
    });
    setIsAdding(false);
  };
  const addUpdatedMember = (updatedMember) => {
    setMembers((currentMembers) => {
      return [...currentMembers, updatedMember];
    });
    setIsUpdate(false);
  };
  const openUpdateForm = (member) => {
    setMember(member);
    setIsUpdate(true);
    setIsAdding(false);
  };
  const closeUpdateForm = () => {
    setIsUpdate(false);
    setIsAdding(false);
  };
  const deleteHandler = (deletedId) => {
    const newMembers = members.filter((member) => member.id !== deletedId);
    setMembers(newMembers);
  };
  return (
    <div className="App">
      <DailyInfo />
      <Header />
      {/* {!isAuth && <Home />} */}
      {/* {!isAdding && (
        <Register
          addNewMember={addMemberHandler}
          alreadyMember={alreadyMemberHandler}
        />
      )} */}
      <Login
        isAdmin={adminHandler}
        loginHandler={loginHandler}
        notMemberHandler={notMemberHandler}
        isAuth={loginHandler}
      />
      <MembersList />
      )}
      <Members />
      <Member member={member} backToMembers={backToMembersHandler} />
    </div>
  );
}

export default App;

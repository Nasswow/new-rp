import { useSelector } from "react-redux";
import "./App.css";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import MembersList from "./components/members/MembersList";
import DailyInfo from "./components/dailyInfo/DailyInfo";
import Footer from "./components/footer/Footer";
function App() {
  const isAuth = useSelector((state) => state.isAuth);
  return (
    <div className="App">
      <DailyInfo />
      <Header />
      {!isAuth && <Login />}
      {isAuth && <MembersList />}
      {isAuth && <Footer />}
    </div>
  );
}

export default App;

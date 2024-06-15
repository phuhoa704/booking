import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import { ROUTER } from "./configs/router";
import Home from "./views/Home";
// import Footer from "./components/Footer";
import TicketInfo from "./views/TicketInfo";
import Info from "./views/User/Infor";
import ProfileLayout from "./Layouts/ProfileLayout";
import Member from "./views/User/Member";
import MyTicket from "./views/User/MyTicket";
import Preferential from "./views/User/Preferential";
import Credits from "./views/User/Credits";
import Evaluation from "./views/User/Evaluation";
import Rent from "./views/Rent";
import Search from "./views/Search";
import Confirmation from "./views/Confirmation";
import Payment from "./views/Payment";
import Result from "./views/Result";
import { useEffect } from "react";
import { TOKEN } from "./configs/constants";
import { useDispatch } from "react-redux";
import { profile } from "./redux/actions/Auth";
import ChangePassword from "./views/User/ChangePassword";
import { getListCategory, getListNews } from "./redux/actions/News";
import NewsDetail from "./views/NewsDetail";
import TicketInfoResult from "./views/TicketInfoResult";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN);
    if(token) {
      dispatch(profile());
    }
    dispatch(getListCategory([]));
    dispatch(getListNews([]));
  },[])
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path={ROUTER.HOME} element={<Home />} />
        <Route path={ROUTER.TICKETINFO} element={<TicketInfo />}/>
        <Route path={ROUTER.TICKETRESULT} element={<TicketInfoResult />}/>
        <Route path={ROUTER.USER} element={<ProfileLayout />}>
          <Route path={ROUTER.INFO} element={<Info />}/>
          <Route path={ROUTER.PASSWORD} element={<ChangePassword />}/>
          <Route path={ROUTER.MEMBER} element={<Member />}/>
          <Route path={ROUTER.MYTICKET} element={<MyTicket />}/>
          <Route path={ROUTER.PREFERENTIAL} element={<Preferential />}/>
          <Route path={ROUTER.CREDITS} element={<Credits />}/>
          <Route path={ROUTER.EVALUATION} element={<Evaluation />}/>
        </Route>
        <Route path={ROUTER.RENT} element={<Rent />}/>
        <Route path={ROUTER.SEARCH} element={<Search />} />
        <Route path={ROUTER.CONFIRMATION} element={<Confirmation />}/>
        <Route path={ROUTER.PAYMENT} element={<Payment />}/>
        <Route path={ROUTER.RESULT} element={<Result />}/>
        <Route path={ROUTER.NEWS} element={<NewsDetail />}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App

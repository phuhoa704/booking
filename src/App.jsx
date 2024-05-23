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

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path={ROUTER.HOME} element={<Home />} />
        <Route path={ROUTER.TICKETINFO} element={<TicketInfo />}/>
        <Route path={ROUTER.USER} element={<ProfileLayout />}>
          <Route path={ROUTER.INFO} element={<Info />}/>
          <Route path={ROUTER.MEMBER} element={<Member />}/>
          <Route path={ROUTER.MYTICKET} element={<MyTicket />}/>
          <Route path={ROUTER.PREFERENTIAL} element={<Preferential />}/>
          <Route path={ROUTER.CREDITS} element={<Credits />}/>
          <Route path={ROUTER.EVALUATION} element={<Evaluation />}/>
        </Route>
        <Route path={ROUTER.RENT} element={<Rent />}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App

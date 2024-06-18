import { ROUTES } from "./constants/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map from "./pages/Map/map";
import MyPage from "./pages/MyPage/mypage";
import Signup from "./pages/SignUp/signup";
import Reservation from "./pages/Reservation/reservation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.MAP} element={<Map />}></Route>
        <Route path={ROUTES.MYPAGE} element={<MyPage />}></Route>
        <Route path={ROUTES.SIGNUP} element={<Signup />}></Route>
        <Route path={ROUTES.RESERVATION} element={<Reservation />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

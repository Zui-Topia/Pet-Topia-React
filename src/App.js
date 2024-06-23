import { ROUTES } from './constants/routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Map from './pages/Map/map';
import MyPage from './pages/MyPage/mypage';
import History from './pages/MyPage/history';
import Signup from './pages/SignUp/signup';
import Reservation from './pages/Reservation/reservation';
import Login from './pages/LogIn/login';
import Main from './pages/Main/main';
import Auth from './pages/MyPage/qrAuth';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.MAP} element={<Map />}></Route>
                <Route path={ROUTES.MYPAGE} element={<MyPage />}></Route>
                <Route path={ROUTES.SIGNUP} element={<Signup />}></Route>
                <Route path={ROUTES.RESERVATION} element={<Reservation />}></Route>
                <Route path={ROUTES.LOGIN} element={<Login />}></Route>
                <Route path={ROUTES.MAIN} element={<Main />}></Route>
                <Route path={ROUTES.AUTH} element={<Auth />}></Route>
                <Route path={ROUTES.HISTORY} element={<History />}></Route>
                <Route path="/*" element={<Main />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

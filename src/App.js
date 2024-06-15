import { ROUTES } from './constants/routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Map from './pages/Map/map';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.MAP} element={<Map />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

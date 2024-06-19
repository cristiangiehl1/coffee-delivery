import { Routes, Route, BrowserRouter } from 'react-router-dom';


import { Home } from '../pages/Home';
import { Checkout } from '../pages/Checkout';
import { Success } from '../pages/Success';


export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/success" element={<Success />} />
            </Routes>
        </BrowserRouter>
    )
}
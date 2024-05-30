import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import BlankLayout from '../layouts/BlankLayout';
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';
import DetailPage from '../pages/DetailPage';
import Cart from '../pages/Cart';
import EditCustomerAccount from '../pages/EditCusAcc';
import PurchaseHistory from '../pages/PurchaseHistory';

function Router() {
    return (
        <Routes >
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<MainLayout />} >
                <Route index element={<Home />} />
                <Route path="product/:id" element={<DetailPage />} />
                <Route path='editAcc'   element={<EditCustomerAccount />} />
                {/* <Route path='purchase'element={<PurchaseHistory/>}/> */}
            </Route>
            <Route element={<BlankLayout />} >

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reset" element={<ForgotPassword />} />
            </Route>
        </Routes>
    );
}

export default Router;
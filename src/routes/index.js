import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import BlankLayout from '../layouts/BlankLayout';
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';

function Router() {
    return (
        <Routes >
            <Route element={<MainLayout />} >
                <Route path="/" element={<Home />} />
            </Route>
            <Route element={<BlankLayout />} >

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
            </Route>
        </Routes>
    );
}

export default Router;
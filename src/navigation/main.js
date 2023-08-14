import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '../screens/LandingPage';
import Dashboard from '../screens/Dashboard';



const RouterNavigation = () => {
    return (
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
    );
};

export default RouterNavigation;

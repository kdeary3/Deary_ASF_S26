import {Router, Routes, Route, Link, Navigate} from "react-router-dom"
import React from 'react';
import Landing from "../pages/landing.jsx";
import Results from "../pages/results.jsx";
import Errors from "../pages/errors.jsx";

function AppRoutes() {

    return (
        <Routes>
            <Route path={"/"} element={<Navigate to="/landing"/>}/>
            <Route path={"/landing"} element={<Landing/>}/>
            <Route path={"/results"} element={<Results/>}/>
            <Route path={"/errors"} element={<Errors/>}/>
        </Routes>
    );
}

export default AppRoutes;
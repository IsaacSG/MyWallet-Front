import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Sign-in";
import SignUp from "./Sign-up";
import Home from "./Home";

import { UserProv } from "../Context/userContext";

export default function App() {
    return(

        <UserProv>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<Signin />} />
                    <Route path = "/signUp" element = {<SignUp />} />
                    <Route path = "/home" element = {<Home />} />
                </Routes>
            </BrowserRouter>
        </UserProv>
    );
}
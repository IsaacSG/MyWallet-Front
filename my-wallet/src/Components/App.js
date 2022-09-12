import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Sign-in";
import SignUp from "./Sign-up";

import { UserProv } from "../Context/userContext";

export default function App() {
    return(

        <UserProv>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<Signin />} />
                    <Route path = "/sign-up" element = {<SignUp />} />
                </Routes>
            </BrowserRouter>
        </UserProv>
    );
}
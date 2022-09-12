import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import Logo from "../Styles/Images/MyWallet.png";
import userContext from "../Context/userContext.js";
import { BaseAPI } from "../Global Data/Data";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(userContext);

    const redirect = useNavigate();

    function Sign() {
        const body = {email, password};
        const promisse = axios.post(`${BaseAPI}/signIn`, body);
        promisse.then(res => {
            setUser({token: res.data.token, name: res.data.name});
            redirect("/home");
        });

        promisse.catch(res => {
            alert("Email ou senha inválido.");
        });
    }

    return(
        <Menu>
            <img src = {Logo} alt = "Logo" />
            <input type = "text" placeholder = "Email" value = {email} onChange = {e => setEmail(e.target.value)}/>
            <input type = "text" placeholder = "Senha" value = {password} onChange = {e => setPassword(e.target.value)}/>
            <button onClick = {Sign} >
                <p>Entrar</p>
            </button>
            <Link to = {"/signUp"} style={{ textDecoration: 'none', color: '#FFFFFF', marginBottom: '103px' }} > Primeira vez? Cadastre-se!</Link>
        </Menu>
    );
}

const Menu = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color: #8C11BE;
    color: #8C11BE;
    width: 100%;
    height: 100%;
    img{
        width: 150px;
        height: 50px;
        margin-bottom: 24px;
        margin-top: 154px;
    }

    button{
        background-color: #A328D6;
        width: 326px;
        height: 46px;
        border-radius: 5px;
        margin-bottom: 36px;
    }

    p{
        font-size: 20px;
        color: #FFFFFF;
    }

    input{
        width: 365px;
        height: 58px;
        border-radius: 5px;
        margin-bottom: 13px;
    }

    Link{
        font-size: 15px;
        margin-bottom: 50px;
    }
`
import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Logo from "../Styles/Images/MyWallet.png";
import { BaseAPI } from "../Global Data/Data";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const redirect = useNavigate();

    function Signup() {
        const body = {name, email, password, confirmpassword};
        const promisse = axios.post(`${BaseAPI}/signUp`, body);
        promisse.then(res => {
            redirect("/");
            console.log(body)
        });
    }

    return(
        <Menu>
        <img src = {Logo} alt = "Logo"/>
        <input type = "text" placeholder = "Nome" value = {name} onChange = {e => setName(e.target.value)}/>
        <input type = "text" placeholder = "Email" value = {email} onChange = {e => setEmail(e.target.value)}/>
        <input type = "text" placeholder = "Senha" value = {password} onChange = {e => setPassword(e.target.value)}/>
        <input type = "text" placeholder = "Confirme a senha" value = {confirmpassword} onChange = {e => setConfirmpassword.apply(e.target.value)}/>
        <button onClick = {Signup} > <p>Cadastrar</p> </button>
        <Link to = "/" style={{ textDecoration: 'none', color: '#FFFFFF'}}>Já tem uma conta? Entre agora!</Link>
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
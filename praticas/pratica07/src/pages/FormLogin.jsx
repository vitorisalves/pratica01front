import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Botao from "../components/Botao";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";

function FormLogin(props) {
    const { email, setEmail } = useState()
    const { senha, setSenha } = useState()
    const navigate = useNavigate()
    return (
        <form>
            <input type="Email" valor={email} mudaValor={(e) => setEmail(e.target.value)} />
            <input type="Senha" valor={senha} mudaValor={(e) => setSenha(e.target.value)} />
            <Botao texto="Entrar" aoClicar={(e) => navigate("/home")} />
        </form>
    )
}

export default FormLogin
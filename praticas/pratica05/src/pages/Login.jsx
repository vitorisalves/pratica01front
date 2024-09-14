import Icone from "../components/Icone"
import Titulo from "../components/Titulo"
import InputEmail from "../components/InputEmail"
import InputSenha from "../components/InputSenha"
import Botao from "../components/Botao"
import Link from "../components/Link"
import Conteudo from "../components/Conteudo"
import Rodape from "../components/Rodape"
import "./Login.css"

function Login() {
    return (
        <>
            <Conteudo estilo="login-container">
                <Icone imagem="" texto="Logo da Aplicaçao" />
                <Titulo texto="Aluno Online" />
                <InputEmail />
                <InputSenha />
                <Botao texto="Entrar" />
                <Link texto="Esqueceu a senha?" />
            </Conteudo>
            <Rodape texto="Copyright (C) 2024" />
        </>
    )
}

export default Login
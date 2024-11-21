import Logo from "../components/Logo"
import Titulo from '../components/Titulo'
import InputUsuario from '../components/InputUsuario'
import InputSenha from '../components/InputSenha'
import BotaoSubmit from '../components/BotaoSubmit'
import Link from '../components/Link'
import Rodape from "../components/Rodape"
import "./Login.css"
import Conteudo from "../components/Conteudo"

function Login() {
    const urlLogo = "https://www.svgrepo.com/show/489120/school.svg"
    const textoLogo = "Logo da Aplicaçao"
    return (
        <>
            <Conteudo style="login-form">
                <Logo imagem={urlLogo} texto={textoLogo}/>
                <Titulo texto="Aluno Online" />
                <InputUsuario />
                <InputSenha />
                <BotaoSubmit texto="Entrar"/>
                <Link texto="Esqueceu a Senha"/>
                <Link texto="Criar uma Conta"/>
            </Conteudo>
            <Rodape />
        </>
    )
}

export default Login
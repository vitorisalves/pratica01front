import { useParams } from "react-router-dom"
import Secao from "../components/Secao"
import InputEmail from "../components/InputEmail"
import InputSenha from "../components/InputSenha"
import Botao from "../components/Botao"

function Perfil() {
    const { id } = useParams()
    return (
        <>
            {id == 1 ?
                <Secao>
                    <InputEmail valor="aluno@email.com" mudaValor={() => { }} />
                    <InputSenha valor="" mudaValor={() => { }} />
                    <Botao texto="Salvar" />
                </Secao>
                : <p>Usuario nao Encontrado</p>

            }
        </>
    )
}

export default Perfil
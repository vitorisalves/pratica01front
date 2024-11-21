import InputPesquisar from "./InputPesquisa"
import Logo from "./Logo"
import Titulo from "./Titulo"

function Cabecalho() {
    return (
        <header>
            <Logo imagem="" texto="Log da Aplicacao" />
            <Titulo texto="Aluno Online" />
            <InputPesquisar/>
            <Logo imagem="" texto="Icone Pesquisar" />
        </header>
    )
}

export default Cabecalho


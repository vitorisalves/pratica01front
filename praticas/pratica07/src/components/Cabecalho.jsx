function Cabecalho(props) {
    return (
        <>
            <header>
                <div>
                    <img src="https://www.svgrepo.com/show/411955/learn.svg" alt="Logo da Aplicacao" />
                    <h1>Aluno Online</h1>
                </div>
                <div>
                    <input type="search" name="pesquisa" placeholder="Pesquisar..." />
                    <img src="https://www.svgrepo.com/show/507851/search-square.svg" alt="Icone de Pesquisar" />
                </div>
            </header>
        </>
    )
}

export default Cabecalho
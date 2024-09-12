import Menu from "../components/Menu"

function Perfil(props) {
    return (
        <>
            <h1>Pagina Perfil</h1>
            <Menu navegaPara={props.navegaPara} />
        </>
    )
}

export default Perfil
import { useParams } from "react-router-dom"

function Perfil() {
    const { id } = useParams()

    return (
        <>
            {id == 1 ?
                <h2>Perfil do Usuario</h2>
                : <p>Num Pode!!!</p>}
        </>
    )
}

export default Perfil
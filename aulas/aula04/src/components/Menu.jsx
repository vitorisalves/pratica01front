import Link from '../components/Link'

function Menu() {
    const opcoes = ["Home", "Perfil", "Sair"]
    return (
        <nav>
            <ul>
                {opcoes.map((opcao, index) => (
                    <li key={index}>
                        <Link texto={opcao}></Link>
                    </li>))}
            </ul>
        </nav>
    )
}

export default Menu
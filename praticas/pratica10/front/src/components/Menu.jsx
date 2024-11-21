import { NavLink } from "react-router-dom";

function Menu() {
    return (
        <Nav>
            <ul>
                <li>
                    <NavLink to="/">Listar Contato</NavLink>
                </li>
                <li>
                    <NavLink to="/novo">Novo Contato</NavLink>
                </li>
            </ul>
        </Nav>
    )
}

export default Menu
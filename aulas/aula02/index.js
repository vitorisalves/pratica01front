const root = document.getElementById("root")

/* componentes da aplicaçao */

function Cabecalho() {
    const header = document.createElement("header");
    return header;
}

function Principal() {
    const main = document.createElement("main");
    return main;
}

function Rodape() {
    const footer = document.createElement("footer")
    return
}

function Botao(nome) {
    const button = document.createElement("input")
    button.setAttribute("type", "submit")
    button.setAttribute("value", nome)
    return button
}

function FormLogin() {
    const form = document.createElement("form")
    form.setAttribute('action', "")
    form.setAttribute('method', "post")
    return form
}

/*paginas da aplicaçao */

function Perfil() {
    root.append(Cabecalho())
    root.append(Principal())

}

function Home() {
    root.append(Cabecalho())
    root.append(Principal())
}

function Login() {
    const main = Principal()
    main.append(FormLogin())
    root.append(main)
    root.append(Rodape())
}

Login();
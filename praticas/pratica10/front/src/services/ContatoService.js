import axios from "axios"

const url = import.meta.env.VITE_API_URL;

function buscarTodos() {
    return axios.get(url)
        .then((response) => { return { sucesso: true, dados: response.data } })
        .catch((error) => { return { sucesso: false, mensagem: "Ocorreu um erro!" } })
}

function buscarUm(id) {
    return axios.get('url/${id}')
        .then((response) => { return { sucesso: true, dados: response.data } })
        .catch((error) => { return { sucesso: false, mensagem: "Ocorreu um erro!" } })

}

function adicionar(contato) {
    return axios.post(url, contato)
        .then((response) => { return { sucesso: true, dados: response.data } })
        .catch((error) => { return { sucesso: false, mensagem: "Ocorreu um Erro!" } })
}

function atualizar(contato) {
    return axios.put('url/${contato.id', { nome: contato.nome, telefone: contato.telefone })
        .then((response) => { return { sucesso: true, dados: response.data } })
        .catch((error) => { return { sucesso: false, mensagem: "Ocorreu um Erro!" } })
}

function remover(id) {
    return axios.delete('url/${id}')
        .then((response) => { return { sucesso: true, dados: response.data } })
        .catch((error) => { return { sucesso: false, mensagem: "Ocorreu um erro!" } })
}

export default { buscarTodos, buscarUm, adicionar, atualizar, remover }

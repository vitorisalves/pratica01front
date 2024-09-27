function InputSenha(props) {
    return (
        <>
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" value={props.valor} onChange={props.mudaValor} required />
        </>
    )
}

export default InputSenha
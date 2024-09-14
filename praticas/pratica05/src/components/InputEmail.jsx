import "./Input.css"

function InputEmail() {
    return(
        <>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="Email" required/>
        </>
    )
}

export default InputEmail
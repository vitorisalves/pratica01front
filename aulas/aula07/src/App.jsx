import { useForm } from "react-hook-form"

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <label htmlFor="">E-mail</label>
        <input type="email" {...register("email", { required: { value: true, message: "Email é obrigatorio sua mula" } })} />
        {errors.email && <p>{errors.email.message}</p>}
        <label htmlFor="">Senha</label>
        <input type="password" {...register("senha", { required: { value: true, message: "Senha é obrigatoria" }, minLength: { value: 6, message: "A senha deve ter no minimo 6 caracteres" } })} />
        {errors.senha && <p>{errors.senha.message}</p>}
        <button>Entrar</button>
      </form>
    </>
  )
}

export default App
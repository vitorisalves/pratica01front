function Home(props) {
  return (
    <>
      <h1>Home</h1>
      <p>Olá {usuario.email}</p>
      <button onClick={(e) => logout(false)}>Sair</button>
    </>
  );
}

export default Home;
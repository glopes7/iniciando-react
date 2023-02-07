export function Form() {
  function cadastrarUsuario() {
    console.log("Cadastrou Usuário");
  }

  return (
    <div>
      <h1>Meu Cadastro</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          cadastrarUsuario();
        }}
      >
        <div>
          <input type="text" placeholder="Usuário" />
        </div>
        <div>
          <input type="text" placeholder="Senha" />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

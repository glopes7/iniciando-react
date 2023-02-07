export function Condicional() {
  function enviarEmail(e: any) {
    e.preventDefault();
    console.log(e.target.email.value);
  }

  return (
    <div>
      <h1>Meu Cadastro</h1>
      <form onSubmit={enviarEmail}>
        <input name="email" type="text" placeholder="Digite Seu Email" />
        <button>Enter</button>
      </form>
    </div>
  );
}
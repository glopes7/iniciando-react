export function Evento() {
  
  function meuEvento() {
    console.log("Fui ativado");
  }

  return (
    <div>
      <p>Clique para disparar um evento:</p>
      <button onClick={meuEvento}>Enter</button>
    </div>
  );
}

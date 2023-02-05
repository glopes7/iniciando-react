import { useState } from "react";
import { TextArea } from "./components/TextArea";

function App() {
  const [texts, setTexts] = useState([
    "Texto 1",
    "Texto 2",
    "Texto 3",
    "Texto 4",
  ]);

  function createText() {
    setTexts([...texts, "Texto 5"]);
    console.log("Adicionou");
  }

  return (
    <div>
      {texts.map((jaComValor) => {
        return <TextArea text={jaComValor} />;
      })}
      <div>
        <button
          onClick={createText}
          style={{
            display: "flex",
            position: "relative",
            justifyContent: "center",
            padding: "20px 40px",
            marginLeft: "auto",
            marginRight: "auto",
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            borderTopRightRadius: 6,
            borderTopLeftRadius: 6,
          }}
        >
          Adicionar Texto
        </button>
      </div>
    </div>
  );
}

export default App;

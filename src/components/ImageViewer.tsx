import { useState } from "react";

export function ImageViewer() {
  const [image, setImage] = useState(
    "https://conteudo.imguol.com.br/c/noticias/ce/2023/01/31/anuncio-do-evento-power-of-the-people-com-o-ex-presidente-jair-bolsonaro-1675190367635_v2_450x450.png"
  );

  function ChangeImage(e: any) {
    e.preventDefault();
    setImage(e.target.inputURL.value);
  }

  return (
    <div>
      <form onSubmit={ChangeImage}>
        <input type="text" placeholder="Coloque uma URL img" name="inputURL" />
        <button type="submit">Enter</button>
      </form>
      <img src={image} alt="" />
    </div>
  );
}

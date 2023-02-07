import { useState } from "react";

export function Carrousel() {
  const [url, setUrl] = useState([
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAA1BMVEX/9ABpMi2OAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEXdAAAiK5u5AAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEV8/ABCmAJfAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
  ]);
  const [currentURL, setcurrentURL] = useState(0);

  function Increment() {
    if (currentURL < 2) {
      setcurrentURL(currentURL + 1);
    }
  }

  function Decrement() {
    if (currentURL > 0 ) {
      setcurrentURL(currentURL - 1);
    }
  }
  return (
    <div>
      <button onClick={Decrement}>left</button>
      <img src={url[currentURL]} alt="" />
      <button onClick={Increment}>right</button>
      <div>{currentURL}</div>
    </div>
  );
}

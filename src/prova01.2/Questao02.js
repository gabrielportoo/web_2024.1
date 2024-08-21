import { useState } from "react";

const Questao02 = () => {
  // Variável de estado para alternar entre frente e costas
  const [flag, setFlag] = useState(true);

  const url =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";

  const url2 =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png";

  // Função para alternar a imagem
  const toggleImage = () => {
    setFlag(!flag); // Alterna o valor de flag entre true e false
  };

  return (
    <div>
      <img src={flag ? url : url2} alt="Pikachu" width={300} />
      <button onClick={toggleImage}>Virar</button>
    </div>
  );
};

export default Questao02;

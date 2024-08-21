import React, { useState } from "react";

const Questao02 = () => {
  const [virar, setVirar] = useState(true);

  const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
  const url2 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png";

  // função para a alternar entre frente e costas do pokemon
  const alternarImagens = () => {
    setVirar(!virar);
  };

  return (
    <div>
      <div>
        {/*Aqui começa com o pokemon de frente*/}
        <div>
          <h2>Pokemon</h2>
          <img
            src={virar ? url : url2}
            alt="Pikachu"
            width={300}
          />
        </div>
      </div>
      <br />

      {/* Botão para alternar as imagens do pokemon */}
      <button onClick={alternarImagens}>Virar</button>
    </div>
  );
};

export default Questao02;
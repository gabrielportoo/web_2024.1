import { useState, useEffect } from "react";

const Questao03 = () => {
  // Estado para armazenar as capitais com maior e menor população
  const [capitais, setCapitais] = useState({
    menorPopulacao: [],
    maiorPopulacao: [],
  });

  // Função para buscar os dados da API
  const ACapital = async () => {
    try {
      const resposta = await fetch(
        "https://restcountries.com/v3.1/region/europe?fields=capital,population"
      );
      const dados = await resposta.json();

      // Ordena os países com base na população
      const sortedData = dados.sort((a, b) => a.population - b.population);

      // Encontra a capital com menor população
      const menorPopulacao = {
        capital: sortedData[0].capital[0],
        population: sortedData[0].population,
      };

      // Encontra a capital com maior população
      const maiorPopulacao = {
        capital: sortedData[sortedData.length - 1].capital[0],
        population: sortedData[sortedData.length - 1].population,
      };

      // Atualiza o estado com as capitais encontradas
      setCapitais({ menorPopulacao, maiorPopulacao });
    } catch (error) {
      // setCapitais(error)
      console.error("Erro ao buscar os dados:", error);
    }
  };

  useEffect(() => {
    ACapital();
  }, []);

  return (
    <div>
      <h2>Capital com Menor População</h2>
      <p>
        {capitais.menorPopulacao.capital} - População:
        {capitais.menorPopulacao.population}
      </p>

      <h2>Capital com Maior População</h2>
      <p>
        {capitais.maiorPopulacao.capital} - População:
        {capitais.maiorPopulacao.population}
      </p>
    </div>
  );
};

export default Questao03;

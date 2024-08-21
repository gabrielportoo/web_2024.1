import React, { useEffect, useState } from 'react';

const Questao03 = () => {
  // Cria um estado para armazenar as capitais com maior e menor população
  const [capitals, setCapitals] = useState(
        { max: [], min: [] }
    );

  // O useEffect será executado quando o componente for montado
  useEffect(() => {
    // Função assíncrona para buscar dados da API
    const ACapital = async () => {
      try {
        // Faz uma solicitação para a API usando fetch e espera pela resposta
        const resposta = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
        
        // Converte a resposta para JSON
        const dados = await resposta.json();

        // Verifica se há dados disponíveis
        if (dados.length > 0) {
          // Encontra a maior e a menor população na lista de países
          const maxPopulation = Math.max(...dados.map(country => country.population));
          const minPopulation = Math.min(...dados.map(country => country.population));

          // Encontra o objeto que possui a maior população
          const maxCapital = dados.find(country => country.population === maxPopulation);
          // Encontra o objeto que possui a menor população
          const minCapital = dados.find(country => country.population === minPopulation);

          // Atualiza o estado com as capitais correspondentes
          setCapitals({
            max: maxCapital.capital[0],
            min: minCapital.capital[0],
          });
        }
      } catch (error) {
        // Em caso de erro na solicitação, exibe o erro no console
        console.error(error);
      }
    };

    // Chama a função ACapital
    ACapital();
  }, []); // O array vazio [] significa que useEffect será executado apenas uma vez, após a montagem do componente

  // Renderiza o componente com as capitais de maior e menor população
  return (
    <div>
      <p>Capital com maior população: {capitals.max}</p>
      <p>Capital com menor população: {capitals.min}</p>
    </div>
  );
};

export default Questao03;
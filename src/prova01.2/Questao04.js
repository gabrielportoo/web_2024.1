import { useState, useEffect } from "react";

const Questao04 = () => {
  // Estado para armazenar as capitais com maior e menor população
  const [capitais, setCapitais] = useState({
    menorPopulacao: [],
    maiorPopulacao: [],
  });

  // Função para criar a Promise que retorna o array de dados
  const fetchLocalData = () => {
    return new Promise((resolve) => {
      const data = [
        { capital: ["Oslo"], population: 5379475 },
        { capital: ["Athens"], population: 10715549 },
        { capital: ["Mariehamn"], population: 29458 },
        { capital: ["Bern"], population: 8654622 },
        { capital: ["Zagreb"], population: 4047200 },
        { capital: ["Reykjavik"], population: 366425 },
        { capital: ["Luxembourg"], population: 632275 },
        { capital: ["Budapest"], population: 9749763 },
        { capital: ["Amsterdam"], population: 16655799 },
        { capital: ["Vilnius"], population: 2794700 },
        { capital: ["Bratislava"], population: 5458827 },
        { capital: ["Vaduz"], population: 38137 },
        { capital: ["Chișinău"], population: 2617820 },
        { capital: ["Rome"], population: 59554023 },
        { capital: ["Saint Helier"], population: 100800 },
        { capital: ["Monaco"], population: 39244 },
        { capital: ["Minsk"], population: 9398861 },
        { capital: ["Riga"], population: 1901548 },
        { capital: ["Andorra la Vella"], population: 77265 },
        { capital: ["Paris"], population: 67391582 },
        { capital: ["Gibraltar"], population: 33691 },
        { capital: ["Copenhagen"], population: 5831404 },
        { capital: ["Skopje"], population: 2077132 },
        { capital: ["Valletta"], population: 525285 },
        { capital: ["Prague"], population: 10698896 },
        { capital: ["St. Peter Port"], population: 62999 },
        { capital: ["Pristina"], population: 1775378 },
        { capital: ["Longyearbyen"], population: 2562 },
        { capital: ["Podgorica"], population: 621718 },
        { capital: ["Tórshavn"], population: 48865 },
        { capital: ["Tirana"], population: 2837743 },
        { capital: ["Belgrade"], population: 6908224 },
        { capital: ["Kyiv"], population: 44134693 },
        { capital: ["Douglas"], population: 85032 },
        { capital: ["Tallinn"], population: 1331057 },
        { capital: ["Bucharest"], population: 19286123 },
        { capital: ["Sofia"], population: 6927288 },
        { capital: ["Berlin"], population: 83240525 },
        { capital: ["Warsaw"], population: 37950802 },
        { capital: ["London"], population: 67215293 },
        { capital: ["Helsinki"], population: 5530719 },
        { capital: ["Stockholm"], population: 10353442 },
        { capital: ["Vatican City"], population: 451 },
        { capital: ["Moscow"], population: 144104080 },
        { capital: ["Vienna"], population: 8917205 },
        { capital: ["Nicosia"], population: 1207361 },
        { capital: ["Lisbon"], population: 10305564 },
        { capital: ["Sarajevo"], population: 3280815 },
        { capital: ["Brussels"], population: 11555997 },
        { capital: ["Madrid"], population: 47351567 },
        { capital: ["Ljubljana"], population: 2100126 },
        { capital: ["City of San Marino"], population: 33938 },
        { capital: ["Dublin"], population: 4994724 },
      ];
      setTimeout(() => resolve(data), 1000); // Simula um delay na resposta
    });
  };

  const ACapital = async () => {
    try {
      const data = await fetchLocalData();

      // Ordena os países com base na população
      const sortedData = data.sort((a, b) => a.population - b.population);

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

export default Questao04;

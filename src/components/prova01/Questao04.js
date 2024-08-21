import React, { useEffect, useState } from 'react';

// Função que retorna uma Promise com os dados das capitais e populações
const fetchCapitalsData = () => {
  return new Promise((resolve) => {
    resolve([
      {"capital":["Oslo"],"population":5379475},
      {"capital":["Athens"],"population":10715549},
      {"capital":["Mariehamn"],"population":29458},
      {"capital":["Bern"],"population":8654622},
      {"capital":["Zagreb"],"population":4047200},
      {"capital":["Reykjavik"],"population":366425},
      {"capital":["Luxembourg"],"population":632275},
      {"capital":["Budapest"],"population":9749763},
      {"capital":["Amsterdam"],"population":16655799},
      {"capital":["Vilnius"],"population":2794700},
      {"capital":["Bratislava"],"population":5458827},
      {"capital":["Vaduz"],"population":38137},
      {"capital":["Chișinău"],"population":2617820},
      {"capital":["Rome"],"population":59554023},
      {"capital":["Saint Helier"],"population":100800},
      {"capital":["Monaco"],"population":39244},
      {"capital":["Minsk"],"population":9398861},
      {"capital":["Riga"],"population":1901548},
      {"capital":["Andorra la Vella"],"population":77265},
      {"capital":["Paris"],"population":67391582},
      {"capital":["Gibraltar"],"population":33691},
      {"capital":["Copenhagen"],"population":5831404},
      {"capital":["Skopje"],"population":2077132},
      {"capital":["Valletta"],"population":525285},
      {"capital":["Prague"],"population":10698896},
      {"capital":["St. Peter Port"],"population":62999},
      {"capital":["Pristina"],"population":1775378},
      {"capital":["Longyearbyen"],"population":2562},
      {"capital":["Podgorica"],"population":621718},
      {"capital":["Tórshavn"],"population":48865},
      {"capital":["Tirana"],"population":2837743},
      {"capital":["Belgrade"],"population":6908224},
      {"capital":["Kyiv"],"population":44134693},
      {"capital":["Douglas"],"population":85032},
      {"capital":["Tallinn"],"population":1331057},
      {"capital":["Bucharest"],"population":19286123},
      {"capital":["Sofia"],"population":6927288},
      {"capital":["Berlin"],"population":83240525},
      {"capital":["Warsaw"],"population":37950802},
      {"capital":["London"],"population":67215293},
      {"capital":["Helsinki"],"population":5530719},
      {"capital":["Stockholm"],"population":10353442},
      {"capital":["Vatican City"],"population":451},
      {"capital":["Moscow"],"population":144104080},
      {"capital":["Vienna"],"population":8917205},
      {"capital":["Nicosia"],"population":1207361},
      {"capital":["Lisbon"],"population":10305564},
      {"capital":["Sarajevo"],"population":3280815},
      {"capital":["Brussels"],"population":11555997},
      {"capital":["Madrid"],"population":47351567},
      {"capital":["Ljubljana"],"population":2100126},
      {"capital":["City of San Marino"],"population":33938},
      {"capital":["Dublin"],"population":4994724}
    ]);
  });
};

const Questao04 = () => {
  // Cria um estado para armazenar as capitais com maior e menor população
  const [capitals, setCapitals] = useState({ max: [], min: [] });

  // O useEffect será executado quando o componente for montado
  useEffect(() => {
    // Função assíncrona para buscar os dados da Promise
    const fetchData = async () => {
      try {
        // Obtém os dados usando a função fetchCapitalsData
        const dados = await fetchCapitalsData();

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
        // Em caso de erro na obtenção dos dados, exibe o erro no console
        console.error(error);
      }
    };

    // Chama a função fetchData
    fetchData();
  }, []); // O array vazio [] significa que useEffect será executado apenas uma vez, após a montagem do componente

  return (
    <div>
      <p>Capital com maior população: {capitals.max}</p>
      <p>Capital com menor população: {capitals.min}</p>
    </div>
  );
};

export default Questao04;

const Questao01A = () => {
  const lista = [
    { a: 10, b: 3, c: 7 },
    { a: 5, b: -3, c: 9 },
    { a: 1, b: 9, c: 40 },
  ];

  return (
    <div>
      <Questao01B lista={lista} />
    </div>
  );
};

function Questao01B(props) {
  const { lista } = props;

  const maioresElementos = lista.map((obj) => {
    const valores = Object.values(obj);
    const maior = Math.max(...valores);

    return <p>{maior}</p>;
  });

  return <div>{maioresElementos}</div>;
}

export default Questao01A;

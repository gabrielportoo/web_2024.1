const Filho = ({altura, peso}) => {

    let imc = peso / (altura * altura)
    const CalcularIMC = () => {
        if(imc < 18 ){
            return <h3>Abaixo do peso</h3>
        }else if(imc > 25){
            return <h3>Acima do peso</h3>
        }else{
            return <h3>Peso ideal</h3>
        }
    }

    return(
        <>
            <h3>IMC: {imc.toFixed(2)}</h3>
            {CalcularIMC()}
        </>
    )
}

export default Filho
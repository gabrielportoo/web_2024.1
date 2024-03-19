// import "./estilo.css"

const Temperatura = () => {

    let c = 32
    let f = 84
    let k = 400

    
    function celsiusParaFahrenheit(c){
        return (9*c / 5) + 32
    }

    function fahrenheitParaCelsius(f){
        return (5*f - 160) / 9
    }

    function kelvin(k){
        return {c: k - 273, f: ((k - 273) * 9) / 5 + 32}
    }

    return(
        <div>
            <h1>Conversor de Temperatura</h1>
            <h1>A temperatura de {c}° Celsius para Fahrenheit é: {celsiusParaFahrenheit(c)}</h1>
            <h1>A temperatura de {f}° Fahrenheit para Celsius é: {fahrenheitParaCelsius(f).toFixed(2)}</h1>
            <h1>A temperatura de {c}° Celsius e {f}° Fahrenheit em Kelvin é: {JSON.stringify(kelvin(k))}</h1>
        </div>
    )
}

export default Temperatura;
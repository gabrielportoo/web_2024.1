import ComponenteFilho from "./ComponenteFilho";
import { createContext, useState } from "react";

const PokemonContext = createContext()

const ComponenteAvo = () => {

    const [numero, setNumero] = useState(1)
    let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1'
    const [contador, setContador] = useState(1)

    const incrementarContador = () => {
        setContador(contador => contador + 1)
    }

    return(
        <PokemonContext.Provider value={numero}>
            <img src={url+contador+".png"} alt="Pokemon" width={200}/>
            <button onClick={() => incrementarContador()}>
                Incrementar
            </button>
            <ComponenteFilho />
        </PokemonContext.Provider>
        
    )
}

export {ComponenteAvo, PokemonContext}
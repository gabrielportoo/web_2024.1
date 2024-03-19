import { useState } from "react"
import PokemonImagem from "./PokemonImagem"
import { PokemonContexto } from "./PokemonContext"

const PokemonPrincipal = () => {
    
    const [id, setId] = useState(1)

    return(
        <div>
            <h3>Pokemon!</h3>
            <h3>ID: {id}</h3>
            <PokemonContexto.Provider value={{id, setId}}>
                <PokemonImagem />
            </PokemonContexto.Provider>
        </div>
    )
}

export default PokemonPrincipal
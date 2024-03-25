import ComponenteNeto from "./ComponenteNeto";
import { useContext } from "react";
import { PokemonContext } from "./ComponenteAvo";

const ComponenteFilho = () => {
    
    const numero = useContext(PokemonContext)

    let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2'

    return(
        <div>
            <img src={url+".png"} alt="Pokemon" width={200}/>
            <ComponenteNeto />
        </div>
    )
}

export default ComponenteFilho
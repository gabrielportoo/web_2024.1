import { useContext } from "react"
import { PokemonContext } from "./ComponenteAvo"

const ComponenteNeto = () => {
    
    const numero = useContext(PokemonContext)
    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3"
    
    return(
        <div>
            <img src={url+".png"} alt="Pokemon" width={200}/>
        </div>
    )
}

export default ComponenteNeto
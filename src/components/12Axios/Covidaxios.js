import axios  from "axios"
import { useEffect, useState } from "react"

const CovidAxios = () => {
    
    // let casos = 0
    // let mortes = 0

    const [casos, setCasos] = useState(0)
    const [mortes, setMortes] = useState(0)

    useEffect(
        () => {
            axios.get("https://covid19-brazil-api.vercel.app/api/report/v1")
            .then(resposta => {
                setCasos(resposta.data.data[8].cases)
                setMortes(resposta.data.data[8].deaths)
            })
            .catch(error => console.log(error))
        }
        ,
        []
    )
    
    return(
        <div>
            <h1>Ceará</h1>
            <h3>Casos: {casos}</h3>
            <h3>Mortes: {mortes}</h3>

        </div>
    )
}

export default CovidAxios
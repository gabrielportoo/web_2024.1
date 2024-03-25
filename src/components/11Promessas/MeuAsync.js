import { useEffect, useState } from "react"

const MinhaPromessa = new Promise(
    (resolve, rejected) => {
        // computação em x segundos...
        setTimeout(
            () => {
                // console.log("Fui executado")
                const meuNumero = Math.floor(Math.random() * 10) + 1
                if(meuNumero % 2 === 0) resolve("Deu tudo certo, seu número é " + meuNumero)
                else rejected("Deu tudo errado, seu número é: " + meuNumero)
            }
            ,
            2000
        ) //setTimeout
    } //Promise
)

const ComponentePromessa = () => {
    
    const [resultado, setResultado] = useState("")

    async function apiGetPromessa(){
        try{
            const res = await MinhaPromessa
            setResultado(res)
        }catch(error){
            setResultado(error)
        }
    }

    useEffect(
        () =>{
            apiGetPromessa()
        }
        ,
        []
    )

    return(
        <>
            <h3>Promessa com Async!</h3>
            <h4>Resultado: {resultado}</h4>
        </>
    )
}

export default ComponentePromessa
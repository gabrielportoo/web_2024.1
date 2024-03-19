import { useContext } from "react"
import { Variavel } from "./VarieavelContext"


const CompA = () =>{
    
    const variavelDeA = {nome:"Gabriel", curso: "SI"}

    return(
        <div>
            <Variavel.Provider value={variavelDeA}>
                <CompB />
                <CompC />
            </Variavel.Provider>

            {/* <h3>A: {variavelDeA}</h3> */}
        </div>
    )
}

const CompB = () =>{
    const {nome, curso} = useContext(Variavel);
    return(
        <div>
            <h3>B: {nome}, {curso}</h3>
        </div>
    )
}

const CompC = () =>{
    return(
        <div>
            <CompD />
        </div>
    )
}

const CompD = () =>{
    return(
        <div>
            <CompE />
        </div>
    )
}

const CompE = () =>{
    const {nome, curso} = useContext(Variavel)
    return(
        <div>
            <h3>E: {nome}, {curso}</h3>
        </div>
    )
}

export {CompA, CompB, CompC, CompD, CompE}

import { useContext } from "react";
import ColorTheme from "./MyColorContext"

const FunctionContextB = () => {
    
    const {bkgA} = useContext(ColorTheme)
    return (
        
        <div>
            <h1 style={{backgroundColor: bkgA}}>
                Contexto B
            </h1>
        </div>
    )
}

export default FunctionContextB
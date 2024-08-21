import FunctionContextB from "./FunctionContextB"
import FunctionContextC from "./FunctionContextC"

import ColorTheme from "./MyColorContext"

const FunctionContextA = () => {
    
    const cores = {bkgA:"white",bkgB:"green",bkgC:"yellow", bkgD:"blue"}
    
    return (

        <ColorTheme.Provider value={cores}>
            <FunctionContextB />
            <FunctionContextC />
        </ColorTheme.Provider>
    )
}

export default FunctionContextA
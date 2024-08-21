import React from "react"

const Hero = ({nome, arena}) => {
    
    const url = "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor"
    return(
        <div>
            <h3>{nome}, lutando em {arena}</h3>
                <img 
                    src={url+".jpg"}
                    alt="Hero"
                    width={150}
                />
        </div>
    )
}

const Enemy = ({nome, arena}) => {
    const url = "https://cdn.ome.lt/JcbeG2yZM-0gp1c2yJBaIjuDrEE=/1200x630/smart/extras/conteudos/hela_6TLZLe3_vMu3MFs"
    return(
        <div>
            <h3>{nome}, lutando em {arena}</h3>
                <img 
                    src={url+".jpg"}
                    alt="Enemy"
                    width={150}
                />
        </div>
    )
}

const Arena = ({children, arena}) => {
    return(
        <div>
            <h3>Arena: {arena}</h3>
                { React.Children.map(children, (elemento) => {
                        return React.cloneElement(elemento, {arena: arena})
                        }
                    )
                }
        </div>
    )
}

const World = ({children}) => {
    return(
        {children}
    )
}

export {Arena, World , Hero, Enemy}
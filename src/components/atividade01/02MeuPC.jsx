const Comp = ({nome, preco}) => {

    return(
        <div>
            <h3>Nome: {nome}</h3>
            <h3>Preço: {preco}</h3>
        </div>
    )
}

const PlacaMae = () => {
    return(
        <div>
            <Comp 
                nome="Placa Mãe: BIOSTAR B760M"
                preco={1176.46}
            />
            <hr />
        </div>
    )
}

const Memoria = () => {
    return(
        <div>
           <Comp 
                nome="Memória: KINGSTON A400"
                preco={259.99}
           />
           <hr />
        </div>
    )
}

const PlacaDeVideo = () => {
    return(
        <div>
            <Comp 
                nome="Placa de vídeo: PCYES RADEON RX 550"
                preco={519.99}
            />
            <hr />
        </div>
    )
}

export {Comp, PlacaMae, Memoria, PlacaDeVideo}
import ComFilho from "./ComFilho"
const ComPai = () => {
    
    function receberMensagemDoFilho(mensagem){
        alert("Recebi do meu filho: " + mensagem)
    }

    return(
        <>
            <ComFilho mensagem="oi filho" enviarMensagemParaOPai={receberMensagemDoFilho}/>
        
        </>
    )
}

export default ComPai
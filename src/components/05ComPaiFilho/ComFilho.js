const ComFilho = ({mensagem, enviarMensagemParaOPai}) => {
    return(
        <>
            <h2>mensagem do pai: {mensagem}</h2>
            <button onClick={() => {enviarMensagemParaOPai("Oi pai, tudo bom ?")}}>
                Enviar mensagem para o pai!
            </button>
        </>
    )
}

export default ComFilho
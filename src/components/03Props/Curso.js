//imprima o nome do curso e pelo menos 3 disciplinas
import Disciplina from "./Disciplina";

const Curso = () => {
    return(
        <div>
            <h1>Curso: Sistemas de Informação</h1>
            <hr />
            <Disciplina 
                nome="Matemática Discreta"
                codigo={1}
                creditos={4}
                periodo="2° Semestre"
            />
            <hr />
            <Disciplina 
                nome="Fundamento de Banco de Dados"
                codigo={2}
                creditos={4}
                periodo="3° Semestre"
            />
            <hr />
            <Disciplina 
                nome="Redes de Computadores"
                codigo={3}
                creditos={4}
                periodo="4° Semestre"
            />
        </div>
    )
}

export default Curso
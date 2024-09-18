import "../css/crud.css";
import { useState } from "react";
import AlunoService from "../services/AlunoService";

const CriarAluno = () => {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [ira, setIra] = useState(0); // Índice de Rendimento Acadêmico

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoAluno = { nome, curso, ira };
    AlunoService.postAluno(novoAluno, (data) => {
      console.log(data);
    });
  };

  return (
    <div className="page-content">
      <h1>Criar Aluno</h1>
      <form className="form-content" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="inputNome">
            Nome
          </label>
          <input
            className="form-control"
            type="text"
            name="nome"
            id="inputNome"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="inputCurso">
            Curso
          </label>
          <input
            className="form-control"
            type="text"
            name="curso"
            id="inputCurso"
            onChange={(e) => setCurso(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="inputIra">
            IRA (Índice de Rendimento Acadêmico)
          </label>
          <input
            className="form-control"
            type="number"
            name="ira"
            id="inputIra"
            onChange={(e) => setIra(e.target.value)}
          />
        </div>

        <div className="div-button-submit">
          <button type="submit" className="btn btn-primary">
            Submeter
          </button>
        </div>
      </form>
    </div>
  );
};

export default CriarAluno;

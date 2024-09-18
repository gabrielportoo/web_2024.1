import "../css/crud.css";
import AlunoService from "../services/AlunoService";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditarAluno = () => {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [ira, setIra] = useState(0);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    AlunoService.getAlunoById(id, (aluno) => {
      setNome(aluno.nome);
      setCurso(aluno.curso);
      setIra(aluno.ira);
    });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const alunoEditado = { nome, curso, ira };
    AlunoService.updateAluno(id, alunoEditado, () => {
      navigate("/aluno/listar");
    });
  };

  return (
    <div className="page-content">
      <h1>Editar Aluno</h1>
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
            value={nome}
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
            value={curso}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="inputIra">
            IRA
          </label>
          <input
            className="form-control"
            type="number"
            name="ira"
            id="inputIra"
            onChange={(e) => setIra(e.target.value)}
            value={ira}
          />
        </div>

        <div className="div-button-submit">
          <button type="submit" className="btn btn-primary">
            Atualizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditarAluno;

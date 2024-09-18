import "../css/crud.css";
// import AlunoService from "../../services/AlunoService";
import AlunoService from "../services/AlunoService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListarAluno = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    AlunoService.getAlunos((data) => {
      setAlunos(data);
    });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm(`Deseja excluir o aluno de id = ${id}`)) {
      AlunoService.deleteAluno(id, () => {
        setAlunos(alunos.filter((aluno) => aluno._id !== id));
      });
    }
  };

  return (
    <div className="page-content">
      <h1>Listar Alunos</h1>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Curso</th>
            <th>IRA</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno._id}>
              <td>{aluno._id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.curso}</td>
              <td>{aluno.ira}</td>
              <td>
                <Link
                  to={`/aluno/editar/${aluno._id}`}
                  className="btn btn-primary"
                >
                  Editar
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(aluno._id)}
                >
                  Apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarAluno;

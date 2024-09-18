import axios from "axios";

const API_URL = "http://localhost:3003/alunos/";

const AlunoService = {
  postAluno: (aluno, callback) => {
    axios.post(API_URL + "criar", aluno).then((res) => callback(res.data));
  },

  getAlunos: (callback) => {
    axios.get(API_URL + "listar").then((res) => callback(res.data));
  },

  getAlunoById: (id, callback) => {
    axios.get(`${API_URL}/recuperar/${id}`).then((res) => callback(res.data));
  },

  updateAluno: (id, aluno, callback) => {
    axios
      .put(`http://localhost:3003/alunos/atualizar/${id}`, aluno)
      .then((res) => callback(res.data));
  },

  deleteAluno: (id, callback) => {
    axios
      .delete(`http://localhost:3003/alunos/apagar/${id}`)
      .then((res) => callback(res.data));
  },
};

export default AlunoService;

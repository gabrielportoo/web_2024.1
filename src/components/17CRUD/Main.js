import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import EditarProfessor from "./components/professor/EditarProfessor";
import ListarProfessor from "./components/professor/ListarProfessor";
import CriarProfessor from "./components/professor/CriarProfessor";
import ListarAluno from "./aluno/ListarAluno";
import CriarAluno from "./aluno/CriarAluno";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "professor/listar",
        element: <ListarProfessor />,
      },
      {
        path: "professor/criar",
        element: <CriarProfessor />,
      },
      {
        path: "professor/editar/:id",
        element: <EditarProfessor />,
      },
      {
        path: "aluno/listar",
        element: <ListarAluno />,
      },
      {
        path: "aluno/criar",
        element: <CriarAluno />,
      },
    ],
  },
]);

const Main = () => {
  return <RouterProvider router={router} />;
};

export default Main;

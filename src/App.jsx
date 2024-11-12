import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import ListaProdutos from "./paginas/ListaProdutos/ListaProdutos";
import BotaoContador from "./paginas/BotaoContador/BotaoContador";
import PaginaListaTarefas from "./paginas/PaginaListaTarefas/PaginaListaTarefas";
import PaginaDesafioComponentes from "./paginas/PaginaDesafioComponentes/PaginaDesafioComponentes";
import PaginaListaClientes from "./paginas/PaginaListaClientes/PaginaListaClientes";
import PaginaCadastroClientes from "./paginas/PaginaCadastroClientes/PaginaCadastroClientes";
import PaginaNovoUsuario from "./paginas/PaginaNovoUsuario/PaginaNovoUsuario";
import PaginaLogin from "./paginas/PaginaLogin/PaginaLogin";
import VerificarAutenticacao from "./comum/componentes/VerificarAutenticacao/VerificarAutenticacao";
import PaginaMeuPerfil from "./paginas/PaginaMeuPerfil/PaginaMeuPerfil"; 

const router = createBrowserRouter([
  {
    path: "login",
    element: <PaginaLogin />,
  },
  {
    path: "novo-usuario",
    element: <PaginaNovoUsuario />,
  },
  {
    path: "",
    element: <VerificarAutenticacao />,
    children: [
      {
        path: "",
        element: <PaginaInicial />,
      },
      {
        path: "lista-produtos",
        element: <ListaProdutos />,
      },
      {
        path: "botao-contador",
        element: <BotaoContador />,
      },
      {
        path: "lista-tarefas",
        element: <PaginaListaTarefas />,
      },
      {
        path: "desafio-componentes",
        element: <PaginaDesafioComponentes />,
      },
      {
        path: "lista-clientes",
        element: <PaginaListaClientes />,
      },
      {
        path: "cadastro-cliente/:id?",
        element: <PaginaCadastroClientes />,
      },
      {
        path: "meu-perfil",
        element: <PaginaMeuPerfil />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;

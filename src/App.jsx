import { 
  createBrowserRouter, 
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import Cabecalho from './comum/componentes/Cabecalho/Cabecalho';
import Rodape from './comum/componentes/Rodape/Rodape';

import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
import ListaProdutos from './paginas/ListaProdutos/ListaProdutos';
import BotaoContador from './paginas/BotaoContador/BotaoContador';
import PaginaListaTarefas from './paginas/PaginaListaTarefas/PaginaListaTarefas';
import PaginaDesafioComponentes from './paginas/PaginaDesafioComponentes/PaginaDesafioComponentes';
import PaginaListaClientes from './paginas/PaginaListaClientes/PaginaListaClientes';
import PaginaCadastroClientes from './paginas/PaginaCadastroClientes/PaginaCadastroClientes';

const router = createBrowserRouter ([
  {
    path: '',
    element: <PaginaInicial />
  },
  {
    path: 'lista-produtos',
    element: <ListaProdutos />
  },
  {
    path: 'botao-contador',
    element: <BotaoContador />
  },
  {
    path: 'lista-tarefas',
    element: <PaginaListaTarefas />
  },
  {
    path: 'desafio-componentes',
    element: <PaginaDesafioComponentes />
  },
  {
    path: 'lista-clientes',
    element: <PaginaListaClientes />
  },
  {
    path: 'cadastro-cliente/:id?',
    element: <PaginaCadastroClientes />
  },
]);

function App() {
  return (
    <>
    <Cabecalho />
    <RouterProvider router={router} />
    <Rodape />
    </>
  );
}

export default App
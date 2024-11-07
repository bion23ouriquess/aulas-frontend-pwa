import "./PaginaListaClientes.css";
import { Link, useNavigate } from "react-router-dom";
import Principal from "../../comum/componentes/Principal/Principal";
import ServicoCliente from "../../comum/servicos/ServicoCliente";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

const instanciaServicoCliente = new ServicoCliente();

const PaginaListaClientes = () => {
  const navigate = useNavigate();
  const [listaClientes, setListaClientes] = useState([]);

  useEffect(() => {
    const clientesDoLocalStorage = instanciaServicoCliente.listar();
    setListaClientes(clientesDoLocalStorage);
  }, []);

  const navegarParaEdicao = (idCliente) => {
    navigate(`/cadastro-cliente/${idCliente}`);
  };

  const excluir = (idCliente) => {
    if(confirm('Tem certeza?')){
      const listaAtualizada = instanciaServicoCliente.excluirCliente(idCliente);
      setListaClientes(listaAtualizada);
    }
  };

  return (
    <Principal titulo={"Lista de Clientes"} voltarPara={"/"}>
      <Link to={"/cadastro-cliente"}>Novo</Link>

      {listaClientes.map((cliente) => {
        return (
          <div key={cliente.id} className="pagina-lista-clientes_item-cliente">
            {cliente.nome}
            <div className="pagina-lista-clientes_item-cliente-acoes">
              <FaEdit
                size={24}
                color="black"
                onClick={() => navegarParaEdicao(cliente.id)}
              />
              <FaTrashCan color="red" size={24} onClick={() => excluir(cliente.id)}/>
            </div>
          </div>
        );
      })}
    </Principal>
  );
};

export default PaginaListaClientes;

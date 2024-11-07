import "./PaginaCadastroClientes.css";
import Principal from "../../comum/componentes/Principal/Principal";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import { useEffect, useState } from "react";
import ServicoCliente from "../../comum/servicos/ServicoCliente";
import { useNavigate, useParams } from "react-router-dom";
import { MASCARA_CELULAR, MASCARA_CPF } from "../../comum/utils/mascaras";
import { formatarComMascara } from "../../comum/utils/mascaras";
import { toast } from "react-toastify";

const instanciaServicoCliente = new ServicoCliente();

const PaginaCadastroClientes = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");

  useEffect(() => {
    if (params.id) {
      const clienteEncontrado = instanciaServicoCliente.buscarPorId(params.id);
      if (clienteEncontrado) {
        setNome(clienteEncontrado.nome);
        setEmail(clienteEncontrado.email);
        setCelular(clienteEncontrado.celular);
        setDataNascimento(clienteEncontrado.dataNascimento);
        setCpf(clienteEncontrado.cpf);
      }
    }
  }, [params.id]);

  const salvar = () => {
    if (!nome || !email) {
      toast.error("Preencha todos os campos obrigatórios!");//se os campos não estiverem completos, não irá salvar
      return;
    }

    const cliente = {
      id: params.id ? +params.id : Date.now(),//se for editar o cliente puxa pelo id e salva, se não tiver cadastro irá salvar um novo cliente com um novo id
      nome,
      email,
      celular,
      dataNascimento,
      cpf,
    };
    if (params.id) {
      instanciaServicoCliente.editarCliente(cliente);
    } else {
      instanciaServicoCliente.cadastrarCliente(cliente);
    }

    navigate("/lista-clientes");
  };

  return (
    <Principal
      titulo={params.id ? "Editar Cliente" : "Novo Cliente"}
      voltarPara={"/lista-clientes"}
    >
      {params.id && (
        <div className="campo">
          <label>Id: </label>
          <input type="text" value={params.id} disabled />
        </div>
      )}
      <div className="campo">
        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </div>
      <div className="campo">
        <label>E-mail</label>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="campo">
        <label>Celular</label>
        <input
          type="tel"
          placeholder="Digite seu N° de celular"
          value={celular} //chama a variavel que está no useState
          onChange={(event) =>
            setCelular(formatarComMascara(event.target.value, MASCARA_CELULAR))
          } //evento criado para poder alterar a variável celular
        />
      </div>
      <div className="campo">
        <label>Data de Nascimento</label>
        <input
          type="date"
          placeholder="Digite sua data de nascimento"
          value={dataNascimento}
          onChange={(event) => setDataNascimento(event.target.value)}
        />
      </div>
      <div className="campo">
        <label>CPF</label>
        <input
          type="tel"
          placeholder="Digite seu CPF"
          value={cpf}
          onChange={(event) =>
            setCpf(formatarComMascara(event.target.value, MASCARA_CPF))
          }
        />
      </div>

      <BotaoCustomizado cor={"secundaria"} aoClicar={salvar}>
        Salvar
      </BotaoCustomizado>
    </Principal>
  );
};

export default PaginaCadastroClientes;

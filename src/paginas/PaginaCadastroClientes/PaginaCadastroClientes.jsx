import "./PaginaCadastroClientes.css";
import Principal from "../../comum/componentes/Principal/Principal";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import { useEffect, useState } from "react";
import ServicoCliente from "../../comum/servicos/ServicoCliente";
import { useNavigate, useParams } from "react-router-dom";
import {
  formatarComMascara,
  MASCARA_CEP,
  MASCARA_CELULAR,
  MASCARA_CPF,
} from "../../comum/utils/mascaras";
import { toast } from "react-toastify";
import axios from "axios";

const instanciaServicoCliente = new ServicoCliente();

const PaginaCadastroClientes = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");

  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");

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
      toast.error("Preencha todos os campos obrigatórios!"); //se os campos não estiverem completos, não irá salvar
      return;
    }
    const cliente = {
      id: params.id ? +params.id : Date.now(), //se for editar o cliente puxa pelo id e salva, se não tiver cadastro irá salvar um novo cliente com um novo id
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

  const buscarCEP = async (event) => {
    try {
      const resp = await axios.get(
        `https://brasilapi.com.br/api/cep/v2/${event.target.value}`
      );

      setRua(resp.data.street || "");
      setBairro(resp.data.neighborhood || "");
      setCidade(resp.data.city || "");

      if (resp.data.street) {
        document.getElementById("campoNumero").focus();
      }
    } catch {
      toast.error("CEP não encontrado.");
    }
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
          placeholder="Digite seu Nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </div>

      <div className="campo">
        <label>E-mail</label>
        <input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="campo">
        <label>Celular</label>
        <input
          type="tel"
          placeholder="Digite seu N° de Celular"
          value={celular} //chama a variavel que está no useState
          onChange={(event) =>
            setCelular(formatarComMascara(event.target.value, MASCARA_CELULAR))
          } /*evento criado para poder alterar a variável celular*/
        />
      </div>

      <div className="campo">
        <label>Data de Nascimento</label>
        <input
          type="date"
          placeholder="Digite sua Data de Nascimento"
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

      <br />
      <hr />
      <br />

      <div className="campo">
        <label>CEP</label>
        <input
          type="tel"
          placeholder="Digite seu CEP"
          value={cep}
          onChange={(event) =>
            setCep(formatarComMascara(event.target.value, MASCARA_CEP))
          }
          onBlur={buscarCEP}
        />
      </div>
      <div className="campo">
        <label>Rua</label>
        <input
          type="text"
          placeholder="Digite sua Rua"
          value={rua}
          onChange={(event) => setRua(event.target.value)}
          maxLength={100}
        />
      </div>
      <div className="campo">
        <label>Número</label>
        <input
          id="campoNumero"
          type="text"
          placeholder="Digite o Número"
          value={numero}
          onChange={(event) => setNumero(event.target.value)}
          maxLength={100}
        />
      </div>
      <div className="campo">
        <label>Bairro</label>
        <input
          type="text"
          placeholder="Digite seu Bairro"
          value={bairro}
          onChange={(event) => setBairro(event.target.value)}
          maxLength={100}
        />
      </div>
      <div className="campo">
        <label>Cidade</label>
        <input
          type="text"
          placeholder="Digite sua Cidade"
          value={cidade}
          onChange={(event) => setCidade(event.target.value)}
          maxLength={100}
        />
      </div>

      <BotaoCustomizado cor={"secundaria"} aoClicar={salvar}>
        Salvar
      </BotaoCustomizado>
    </Principal>
  );
};

export default PaginaCadastroClientes;

import "./PaginaCadastroClientes.css";
import Principal from "../../comum/componentes/Principal/Principal";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import { useState } from "react";
import ServicoCliente from "../../comum/servicos/servicoCliente";
import { useNavigate } from "react-router-dom";

const PaginaCadastroClientes = () => {

 

  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");

  const servicoCliente = new ServicoCliente();

  const salvar = () => {
    const novoCliente = { nome, email, celular, dataNascimento, cpf };
    console.log("Novo Cliente: ", novoCliente);

    servicoCliente.salvar(novoCliente);
    navigate("/lista-clientes");
  };

  return (
    <Principal titulo={"Novo Cliente"} voltarPara={"/lista-clientes"}>
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
          onChange={(event) => setCelular(event.target.value)} //evento criado para poder alterar a variável celular
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
          onChange={(event) => setCpf(event.target.value)}
        />
      </div>

      <BotaoCustomizado cor={"secundaria"} aoClicar={salvar}>
        Salvar
      </BotaoCustomizado>
    </Principal>
  );
};

export default PaginaCadastroClientes;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/componentes/Principal/Principal";
import ServicoAutenticacao from "../../comum/servicos/ServicoAutenticacao";

const instanciaServicoAutenticacao = new ServicoAutenticacao();

const PaginaLogin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const entrar = async () => {
    try {
      if (!email || !senha) {
        toast.error("Preencha todos os campos!");
        return;
      }

      await instanciaServicoAutenticacao.login(email, senha);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data)
    }
  };

  return (
    <Principal titulo={"Entrar"}>
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
        <label>Senha</label>
        <input
          type="password"
          placeholder="Digite uma senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />
      </div>
      <BotaoCustomizado cor={"secundaria"} aoClicar={entrar}>
        Entrar
      </BotaoCustomizado>
      <Link to="/novo-usuario">Ainda não possui conta?</Link>
    </Principal>
  );
};

export default PaginaLogin;

import ServicoUsuarios from "./ServicoUsuarios";

const instanciaServicoUsuarios = new ServicoUsuarios();

class ServicoAutenticacao {
  login(email, senha) {
    const usuariosDoLocalStorage = instanciaServicoUsuarios.listar();

    const usuarioLogado = usuariosDoLocalStorage.find(
      (u) => email === email && u.senha === senha
    ); //verificar se os emails e senhas são iguais

    if (usuarioLogado) {
      localStorage.setItem("usuario-logado", JSON.stringify(usuarioLogado));
      return usuarioLogado;
    }
  }

  usuarioEstaLogado() {
    const usuarioLogado = localStorage.getItem("usuario-logado");
    if (usuarioLogado) {
      return true;
    } else {
      return false;
    }
  }
}

export default ServicoAutenticacao;

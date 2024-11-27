import axios from "axios";
import ServicoAutenticacao from "./ServicoAutenticacao.js";

const instanciaApi = axios.create({
  baseURL: "http://localhost:3000",
});

instanciaApi.interceptors.request.use((config) => {
  const _servicoAutenticacao = new ServicoAutenticacao();
  const usuarioLogado = _servicoAutenticacao.buscarUsuarioLogado();
  if (usuarioLogado) {
    config.headers['x-usuario'] = usuarioLogado.id;
  }

  return config;
});

export default instanciaApi;

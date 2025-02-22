import instanciaApi from "./Api";

class ServicoCliente {
  listar() {
    return instanciaApi.get('/usuarios');
  }

  cadastrarCliente(novoCliente) {
    const clientesDoLocalStorage = this.listar();
    clientesDoLocalStorage.push(novoCliente);
    localStorage.setItem(
      "lista-clientes",
      JSON.stringify(clientesDoLocalStorage)
    );
  }

  editarCliente(cliente) {
    const clientesDoLocalStorage = this.listar();
    const indexCliente = clientesDoLocalStorage.findIndex(
      (c) => c.id === +cliente.id
    );
    clientesDoLocalStorage[indexCliente] = cliente;
  }

  buscarPorId(idCliente) {
    const clientesDoLocalStorage = this.listar();
    return clientesDoLocalStorage.find((c) => c.id === +idCliente); //retorna o primeiro registro que encontrar
  }

  excluirCliente(idCliente) {
    const clientesDoLocalStorage = this.listar();

    const listaAtualizada = clientesDoLocalStorage.filter((c) => {
      return c.id !== idCliente;
    });
    localStorage.setItem(
      "lista-clientes",
      JSON.stringify(listaAtualizada)
    );
    return listaAtualizada;
  }
}

export default ServicoCliente;

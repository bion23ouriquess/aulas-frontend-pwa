import './MostrarProduto.css';

const MostrarProduto = () => {
    const produto = {
        nome: 'TV Samsung 55"',
        preco: 2999.90,
        estoque: 345,
    };
    return<div className='produto_root'>
            <span>
                <strong>Produto: </strong>
                {produto.nome}
            </span>
            <span>
                <strong>Nome: </strong>
                {produto.preco}
            </span>
            <span>
                <strong>Qtd Estoque: </strong>
                {produto.estoque}
            </span>
    </div>
 
}

export default MostrarProduto;
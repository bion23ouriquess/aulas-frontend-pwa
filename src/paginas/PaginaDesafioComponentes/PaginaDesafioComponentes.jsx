import MostrarDivisao from "./MostrarDivisao/MostrarDivisao";
import MostrarMeuNomeCompleto from "./MostrarMeuNomeCompleto/MostrarMeuNomeCompleto";
import MostrarMultiplicacao from "./MostrarMultiplicacao/MostrarMultiplicacao";
import MostrarNumerosPares from "./MostrarNumerosPares/MostrarNumerosPares";
import MostrarProduto from "./MostrarProduto/MostrarProduto";
import MostrarSoma from "./MostrarSoma/MostrarSoma";
import MostrarSubtracao from "./MostrarSubtracao/MostrarSubtracao";
import "./PaginaDesafioComponentes.css";

function PaginaDesafioComponentes() {
  return (
    <div>
      <MostrarSoma num1={11} num2={12} />
      <br />
      <MostrarSubtracao num1={10} num2={2} />
      <br />
      <MostrarDivisao num1={50} num2={10} />
      <br />
      <MostrarMultiplicacao num1={10} num2={10} />
      <br />
      <MostrarMeuNomeCompleto
        nome={"Gabriel"}
        sobrenome={"Ouriques Bion"}
      />{" "}
      <br />
      <MostrarProduto /> <br />
      <MostrarNumerosPares />
    </div>
  );
}

export default PaginaDesafioComponentes;

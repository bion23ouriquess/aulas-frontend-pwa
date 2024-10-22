const MostrarSoma = ({ num1, num2 }) => {
  const soma = num1 + num2;

  return (
    <>
      <div>
        A soma de {num1} + {num2} é: <strong>{soma}</strong>
      </div>
    </>
  );
};

export default MostrarSoma;

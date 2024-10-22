const MostrarMultiplicacao = ({ num1, num2 }) => {
    const multi = num1 * num2

    return (
        <>
            <div> A multiplicação de {num1} * {num2} é: <strong>{multi}</strong></div>
        </>
    );
};

export default MostrarMultiplicacao;
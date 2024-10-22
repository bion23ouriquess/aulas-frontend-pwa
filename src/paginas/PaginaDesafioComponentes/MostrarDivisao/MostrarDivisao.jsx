const MostrarDivisao = ({ num1, num2 }) => {
    const div = num1 / num2

    return (
        <>
            <div> A divisão de {num1} / {num2} é: <strong>{div}</strong></div>
        </>
    );
};

export default MostrarDivisao;
const MostrarSubtracao = ({num1, num2}) => {
    const sub = num1 - num2

    return(
        <>
        <div>A subtração de {num1} - {num2} é: <strong>{sub}</strong></div>
        </>
    );
};

export default MostrarSubtracao;
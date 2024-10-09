import BotaoCustomizado from '../BotaoCustomizado/BotaoCustomizado';
import './Principal.css'

function Principal() {
    return <main className='principal_root'>
        Principal
        <BotaoCustomizado cor="primaria" aoClicar={() => alert("Clicou no botão")}>
            Botão Primário
        </BotaoCustomizado>

        <BotaoCustomizado cor="secundaria" aoClicar={() => alert("Clicou no botão")}>
            Botão Secundário
        </BotaoCustomizado>
        
        <BotaoCustomizado cor="padrao" aoClicar={() => alert("Clicou no botão")}>
            Botão Padrão
        </BotaoCustomizado>

    </main>;
};

export default Principal;  
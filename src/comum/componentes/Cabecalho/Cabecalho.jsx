import Avatar from '../Avatar/Avatar';
import './Cabecalho.css';

function Cabecalho(){
    return <header className="cabecalho_root">
        <img src="/vite.svg" height={40} />
        <Avatar nome="Gabriel Bion" />

    </header>;
}

export default Cabecalho;
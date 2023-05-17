import './css/Cabecalho.css'
import { Link } from 'react-router-dom';

function Cabecalho() {
  return (
    <div className="cabecalho">
      <div > <Link to="/" className="logo">SiteEvento</Link> </div>
      <div className="menu">
          <div> <Link to="/servicos" className="itemCabecalho">Serviços </Link></div>
          <div> <Link to="/sobre" className="itemCabecalho">Sobre </Link></div>
          <div> <Link to="/produtos" className="itemCabecalho">Produtos </Link></div>
          <div> <Link to="/faleconosco" className="itemCabecalho">Fale Conosco </Link></div>
      </div>
      <div className="botoes"> 
        <div className="botao-Evento"> <Link to="/lista"> <button> Eventos </button> </Link> </div>
        <div className="botao-login"> <Link to="/login"><button> Login </button></Link></div>
      </div>
    </div>
  );
}

export default Cabecalho;

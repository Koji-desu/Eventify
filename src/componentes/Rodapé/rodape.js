import { Link } from 'react-router-dom';
import '../css/rodape.css';

function Rodape() {
  return (
    <div className="Rodape"> 
        <div className='logo'> SiteEvento </div>
        <div className='card'> 
            <div className='tituloRodape'> ENCONTRE EVENTOS </div>
            <div className='itemRodape'> Hoje </div>
            <div className='itemRodape'> Amanhã </div>
            <div className='itemRodape'> Esta semana </div>
            <div className='itemRodape'> Este fim de semana </div>
            <div className='itemRodape'> Próxima semana </div>
            <div className='itemRodape'> Este mês </div>
        </div>
        <div className='card'> 
            <div className='tituloRodape'> CATEGORIAS </div>
            <div className='itemRodape'> Festas e Shows </div>
            <div className='itemRodape'> Concertos Musicais </div>
            <div className='itemRodape'> Teatros e espetáculos </div>
            <div className='itemRodape'> Gastronomia </div>
            <div className='itemRodape'> Infantil </div>
            <div className='itemRodape'> Lazer, cultura e arte </div>
            <div className='itemRodape'> Passeios e tours </div>
            <div className='itemRodape'> Moda e beleza </div>
            <div className='itemRodape'> Games geek </div>
        </div>
        <div className='card'> 
            <div className='tituloRodape'> CIDADES </div>
            <div className='itemRodape'> São Paulo </div>
            <div className='itemRodape'> Rio de Janeiro </div>
            <div className='itemRodape'> Santa catarina </div>
            <div className='itemRodape'> Belo Horizonte </div>
            <div className='itemRodape'> Brasilía </div>
            <div className='itemRodape'> Porto Alegre </div>
            <div className='itemRodape'> Curitiba </div>
            <div className='itemRodape'> Recife </div>
            <div className='itemRodape'> Salvador </div>
        </div>
        <div className='card'> 
            <div className='tituloRodape'> PLANEJE SEU EVENTO </div>
            <div className='itemRodape'> Festas e shows </div>
            <div className='itemRodape'> Workshops </div>
            <div className='itemRodape'> Esportivo </div>
            <div className='itemRodape'> Evento Online </div>
            <div className='itemRodape'> Gastronômico </div>
        </div>
    </div>
  );
}

export default Rodape;

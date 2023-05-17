import '../css/Home.css'
import { Link } from 'react-router-dom';
import Eventos from './lista';

function Home() {
    return (
        <div> 
            <div className="Container">
                <div className="texto">
                    <div className="titulo"> PRETENDE ORGANIZAR OU PARTICIPAR DE UM EVENTO? </div>
                    <div className="descricao"> A (nome da empresa) tem a ferramenta mais completa para te ajudar nessa missão. Embarque conosco que o incrível mundo de eventos está te esperando. </div>
                    <div className="botoes">
                        <div className='botao-Evento'> <Link to="/criarevento"> <button> Criar um Evento </button> </Link> </div> 
                        <div className='explorar'> <Link to="/lista"> <button> Explorar Eventos</button> </Link> </div>
                    </div>
                    <div className="Obs"> CRIE A EXPERIÊNCIA PERFEITA PARA SEUS CONVIDADOS, COMECE COM O SITE DE EVENTOS PERFEITO. </div>
                </div>
            </div>
            <div className='container2'>
                <Eventos/>
            </div>
        </div>
    )
}

export default Home;
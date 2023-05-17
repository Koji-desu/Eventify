import '../css/Construcao.css';
import coneConstrucao from '../img/coneConstrucao.png'
import DangerSeguranca from '../img/DangerSeguranca.png'

const Construcao = () => {
    return (
        <div className="container">
            <h1>Estamos em construção</h1>
            <img src={coneConstrucao} alt="Cone de trânsito" className="cone" />
            <p>Desculpe pelo transtorno, estamos trabalhando duro para trazer um ótimo conteúdo em breve!</p>
        </div>
    );
} 

export default Construcao;
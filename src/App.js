import './App.css';
import './componentes/Cabecalho.js'
import Rodape from './componentes/Rodapé/rodape';

import RouterApp from './route';

function App() {
    return (         
        <>
        <RouterApp/>
        <Rodape/>
        </> 
    );
}

export default App;
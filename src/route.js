import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/componentes/pages/Home.js';
import Eventos from './componentes/pages/lista.js';
import Construcao from "./componentes/pages/Construcao.js";
import PageNotFound from './componentes/pages/PageNotFound.js';
import Cabecalho from "./componentes/Cabecalho.js";
import './componentes/css/Cabecalho.css';
import Rodape from "./componentes/Rodapé/rodape.js";

/* abaixo componentes que ainda estão em construção e como medida paliativa sera usado o componente Construção

import Servicos from './componentes/pages/Servicos.js'
import Sobre from './componentes/pages/Produtos.js'
import Produtos from './componentes/pages/Produtos.js'
import FaleConosco from './componentes/pages/Produtos.js'
import Login from './componentes/pages/Login.js';
*/

function RouterApp(){
    return(
        <BrowserRouter>
        <Cabecalho/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicos" element={<Construcao />} />
                <Route path="/sobre" element={<Construcao />} />
                <Route path="/produtos" element={<Construcao />} />
                <Route path="/faleconosco" element={<Construcao />} />
                <Route path="/Login" element={<Construcao />} />
                <Route path="/lista" element={<Eventos />} />
                <Route path="/criarevento" element={<Construcao />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/Rodape" element={<Rodape />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp;

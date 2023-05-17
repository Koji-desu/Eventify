import React from "react";
import './index.css';

function CardEvento (props) {
    return (
        <div className="evento">
            <div className="titulo"> <b> {props.nomeEvento} </b> </div>
            <img src={props.imgEvento} height="200" width="350" />
            <div className="info"> 
                <div> 
                    <div className="item"> <b> Valor: </b> R$ {props.preco}</div>
                    <div className="item"> <b> Data do Evento: </b> {props.dataEvento}  </div> 
                    <div className="item"> <b> Horário de Início: </b>{props.horarioInicio} </div> 
                    <div className="item"> <b>Horário Final: </b> {props.horarioFim} </div> 
                </div>
                <div className="comprar">  <img src="https://cdn-icons-png.flaticon.com/512/84/84426.png" width={30}/> </div>
            </div>
        </div>
  );
}

export default CardEvento;
import imgNotFound from '../img/404PageNotFound.png';

function PageNotFound(){
    return(
        
        <div style={{textAlign: "center"}}>
           
        <h1>Pagina nao encontrada</h1>
        <img src={imgNotFound}></img>
        </div>
    )
}

export default PageNotFound;
import '../css/lista.css';
import CardEvento from '../CardEvento';

function handleClick() {
  console.log("O botão foi clicado!");
}

function Eventos() {
  const eventos = [
    {
      nomeEvento: "Festival de Verão do Sol",
      imgEvento: "https://img.freepik.com/fotos-gratis/palmeira-de-coco_74190-1011.jpg?w=996&t=st=1684281721~exp=1684282321~hmac=5b827a4388dbbaa533550f805b24835981e883caa61c085b6fe25710438f86f8",
      preco: "25",
      dataEvento: "18/12/2023",
      horarioInicio: "18h00",
      horarioFim: "23h00",
    },
    {
      nomeEvento: "Rock in City",
      imgEvento: "https://img.freepik.com/fotos-gratis/dancando-em-um-show-enquanto-a-cantora-se-apresenta-cercada-de-luzes_181624-9688.jpg?w=996&t=st=1684281832~exp=1684282432~hmac=f4d49d55a700db4ad8e66aaa2f120b1bce83289940f67160d595997d753b2c08",
      preco: "20",
      dataEvento: "15/02/2024",
      horarioInicio: "20h00",
      horarioFim: "02h00",
    },
    {
      nomeEvento: "Samba na Praça",
      imgEvento: "https://img.freepik.com/fotos-premium/sentindo-o-ritmo-na-bateria-captura-aproximada-de-um-artista-musical-tocando-bateria-com-sua-banda_590464-30987.jpg?w=2000",
      preco: "15",
      dataEvento: "23/06/2024",
      horarioInicio: "14h00",
      horarioFim: "19h00",
    },
    {
      nomeEvento: "Festival de Jazz ao Ar Livre",
      imgEvento: "https://img.freepik.com/vetores-gratis/arte-do-canal-do-youtube-de-musica-plana_23-2148886548.jpg?w=1380&t=st=1684282642~exp=1684283242~hmac=3aa9e8b68800b5370b2a70ae005bd08c966d8217dffaf0fb4749305d0b885913",
      preco: "30",
      dataEvento: "12/08/2024",
      horarioInicio: "16h00",
      horarioFim: "22h00",
    },
    {
      nomeEvento: "Festa Junina",
      imgEvento: "https://img.freepik.com/vetores-gratis/ilustracao-de-festa-junina-com-bandeiras-do-partido-lanterna-de-papel-e-letra-3d-em-fundo-amarelo-brasil-junho-festival-design-para-cartao-de-felicitacoes-convite-ou-cartaz-de-ferias_1314-2778.jpg?w=996&t=st=1684282697~exp=1684283297~hmac=a37fa12389502524652c00fdd56f2f0bcdb8dfb68f0de973db8af2a4f8c72623",
      preco: "10",
      dataEvento: "28/06/2024",
      horarioInicio: "18h00",
      horarioFim: "23h00",
    },
    {
      nomeEvento: "Festival de Blues",
      imgEvento: "https://ds.static.rtbf.be/article/image/1920x1080/d/f/5/217f5e7754c92d28fc6835d42f43548d-1634544722.jpg",
      preco: "27",
      dataEvento: "07/09/2024",
      horarioInicio: "19h00",
      horarioFim: "00h00",
    },
    {
      nomeEvento: "Noite Latina",
      imgEvento: "https://images.mlssoccer.com/image/private/t_q-best/mls-dcu-prd/gpaelslxyuj56fgxgh7e.jpg",
      preco: "18",
      dataEvento: "19/07/2024",
      horarioInicio: "22h00",
      horarioFim: "03h00",
    },
    {
      nomeEvento: "Festival de Comédia",
      imgEvento: "https://m.media-amazon.com/images/I/61ARyafIDPL.png",
      preco: "25",
      dataEvento: "03/11/2024",
      horarioInicio: "20h00",
      horarioFim: "22h00",
    },
    {
      nomeEvento: "Show de Pop Rock",
      imgEvento: "https://img.freepik.com/vetores-gratis/pop-rock-neon-com-tambor-paus-e-notas-musicais_1262-15925.jpg?w=2000",
      preco: "22",
      dataEvento: "09/03/2024",
      horarioInicio: "21h00",
      horarioFim: "23h30",
    },
    {
      nomeEvento: "Musical",
      imgEvento: "https://img.freepik.com/vetores-gratis/fundo-de-pentagrama-musical-brilhante-com-notas-sonoras_1017-31220.jpg?w=1380&t=st=1684358935~exp=1684359535~hmac=9372e2adcf2964a8e5cf4bc4aadfde06a137f1dd811904ae5c92312c966da02c",
      preco: "22",
      dataEvento: "09/03/2024",
      horarioInicio: "21h00",
      horarioFim: "23h30",
    }
  ];

  return (
    <div className="lista">
      <h2>Lista de Eventos</h2>
      <div className="eventos-wrapper">
        {eventos.map(item => (
          <div key={item.nomeEvento}>
            <CardEvento nomeEvento={item.nomeEvento}
                        imgEvento={item.imgEvento}
                        preco={item.preco}
                        dataEvento={item.dataEvento}
                        horarioFim={item.horarioFim}
                        horarioInicio={item.horarioInicio}
              />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Eventos;
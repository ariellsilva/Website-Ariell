let trabalho = [
{
    titulo: "Projeto Faculdade: Mudança Climática",
    descricao: "O propósito central do SustemPlanet é educar e conscientizar sobre as mudanças climáticas, alinhando-se diretamente ao ODS 13 (Ação Contra a Mudança Global do Clima) da ONU. <br> Os objetivos específicos incluem Explicar fenômenos como o efeito estufa, Divulgar soluções práticas para a redução de emissões de carbono e incentivar atitudes sustentáveis e Apresentar propostas para minimizar os impactos ambientais e apoiar o entendimento da Agenda 2030.",
    imagem: "img/mudanca-climatica.jpg",
    ferramenta:""
},
    {
    titulo: "Projeto Faculdade: Além das Notas: Depressão Universitária",
    descricao: "O projeto foi desenvolvido com finalidade informativa e educativa, focando na conscientização sobre a saúde mental no ambiente acadêmico. Seus principais propósitos são: Promover a conscientização sobre a depressão universitária, Informar de forma clara e responsável sobre sintomas e fatores de risco e Oferecer recursos confiáveis, utilizando referências de instituições.",
    imagem: "img/biotipos-depressao.jpeg",
    ferramenta:""
},
{
    titulo: "Projeto Pessoal: Gossip Girl: A garota do blog",
    descricao: "O objetivo principal do projeto Gossip Girl é consolidar conhecimentos fundamentais de desenvolvimento web, unindo a prática técnica de HTML5 e CSS3 com a criatividade do storytelling.",
    imagem: "img/img gossip.png",
    ferramenta:""
},
{
    titulo: "Projeto Pessoal: Icarly Web",
    descricao: "O projeto iCarly é uma aplicação front-end vibrante que busca capturar a estética caótica e criativa da famosa série da Nickelodeon, transformando esse universo em uma experiência digital interativa e responsiva.",
    imagem: "img/icarly.jpeg",
    ferramenta:""
}
];
let index = 0;

function clicar() {
    index++;

    if (index >= trabalho.length) {
        index = 0;
    }

    document.getElementById("titulo").innerText = trabalho[index].titulo;
    document.getElementById("descricao").innerText = trabalho[index].descricao;
    document.getElementById("imagem").src = trabalho[index].imagem;
    document.getElementById("ferramenta").scr = trabalho[index].ferramenta;
}

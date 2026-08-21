let posicao = 0;

function moverCarrossel(direcao) {

    const galeria = document.querySelector(".galeria");
    const trabalhos = document.querySelectorAll(".trabalho");

    const largura = trabalhos[0].offsetWidth + 25;

    const quantidadeVisivel = window.innerWidth <= 600 ? 1 :
                               window.innerWidth <= 900 ? 2 : 3;

    const limite = trabalhos.length - quantidadeVisivel;

    posicao += direcao;

    if (posicao < 0) {
        posicao = 0;
    }

    if (posicao > limite) {
        posicao = limite;
    }

    galeria.scrollTo({
        left: posicao * largura,
        behavior: "smooth"
    });
}
function abrirImagem(imagem) {

    const modal = document.getElementById("modalImagem");
    const imagemGrande = document.getElementById("imagemGrande");

    imagemGrande.src = imagem;

    modal.style.display = "flex";
}


function fecharImagem() {

    const modal = document.getElementById("modalImagem");

    modal.style.display = "none";
}
function abrirImagem(src) {
    const modal = document.getElementById("modalImagem");
    const imagem = document.getElementById("imagemGrande");
    const video = document.getElementById("videoGrande");

    video.pause();
    video.style.display = "none";

    imagem.src = src;
    imagem.style.display = "block";

    modal.style.display = "flex";
}


function abrirVideo(src) {
    const modal = document.getElementById("modalImagem");
    const imagem = document.getElementById("imagemGrande");
    const video = document.getElementById("videoGrande");

    imagem.style.display = "none";

    video.src = src;
    video.style.display = "block";

    modal.style.display = "flex";
    video.play();
}


function fecharImagem() {
    const modal = document.getElementById("modalImagem");
    const video = document.getElementById("videoGrande");

    modal.style.display = "none";

    video.pause();
    video.currentTime = 0;
}
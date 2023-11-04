const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

setaAvancar.addEventListener('click', function() {
    const totalDeImagens = imagensPainel.length - 1;

    if (imagemAtual === totalDeImagens) {
        return; // Não faça nada se estiver na última imagem.
    }

    imagemAtual++; // Avance para a próxima imagem.

    // Esconder todas as imagens.
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    });

    // Mostrar a próxima imagem.
    imagensPainel[imagemAtual].classList.add('mostrar');
});

setaVoltar.addEventListener('click', function() {
    if (imagemAtual === 0) {
        return; // Não faça nada se estiver na primeira imagem.
    }

    imagemAtual--; // Volte para a imagem anterior.

    // Esconder todas as imagens.
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    });

    // Mostrar a imagem anterior.
    imagensPainel[imagemAtual].classList.add('mostrar');
});

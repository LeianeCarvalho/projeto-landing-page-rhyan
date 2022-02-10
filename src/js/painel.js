
const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

/*
QUANDO CLICAR NA SETA AVANÇAR TEMOS QUE ESCONDER TODAS AS IMAGENS E MOSTRAR A PRÓXIMA IMAGEM.*/

setaAvancar.addEventListener('click', function(){ 

    //testa se o contador da imagemAtual é igual ao total de imagens
    const totalDeImagens = imagensPainel.length -1
    if(imagemAtual === totalDeImagens){
        return
    }

    /*
        IMAGEM ATUAL COMEÇA EM 0 E A PRIMEIRA IMAGEM ASSIM QUE FOR CLICADO NO AVANÇAR EU PRECISO ADICIONAR MAIS 1 AO CONTADOR DE IMAGENS PRA PODER SABER QUE AGORA EU VOU MOSTRAR A 2ª IMAGEM.
    */

    imagemAtual++;
    
    /*
        ESCONDER TODAS AS IMGENS
        PEGAR TODAS AS IMAGENS USANDO O DOM E REMOVER A CLASSE MOSTRAR.
    */

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    /*
        MOSTRAR A PRÓXIMA IMAGEM
        PEGAR TODAS AS IMAGENS, DESCOBRIR QUAL A PRÓXIMA, E COLOCAR A CLASSE MOSTRAR NELA.
    */
   imagensPainel[imagemAtual].classList.add('mostrar');   
    });

setaVoltar.addEventListener('click', function(){

    if(imagemAtual === 0){
        return;
    }

    imagemAtual--;

    imagensPainel.forEach(imagem =>{
        imagem.classList.remove('mostrar')
    });

    imagensPainel[imagemAtual].classList.add('mostrar');
})
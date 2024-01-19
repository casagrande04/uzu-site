//LIGHT MODE/ DARK MODE
var estiloAtual = 1;

function trocarCSS() {
    var estilo = document.getElementById('estilo');

    // Troca entre os estilos ao clicar no botão
    if (estiloAtual === 1) {
        estilo.href = '../style/style.css';
        estiloAtual = 2;
        // trocar imagem claro / escuro
        var img = document.querySelector("#cdg");
        img.setAttribute('src', '/img/cdg.png');

        var img = document.querySelector("#mode");
        img.setAttribute('src', '/img/darkmode.png');
    } else {
        estilo.href = '../style/lightmode.css';
        estiloAtual = 1;
        // trocar imagem claro / escuro
        var img = document.querySelector("#cdg");
        img.setAttribute('src', '/img/cdg-light.png');

        var img = document.querySelector("#mode");
        img.setAttribute('src', '/img/lightmode.png');
    }
}

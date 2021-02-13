
function clicar_arvore (acao_indice) {
    document.getElementById("ifrVisualizacao").onload = function() {
        var Visualizacao = document.getElementById("ifrVisualizacao").contentWindow.document;
        var acao = Visualizacao.getElementById("divArvoreAcoes").childNodes[acao_indice];
        acao.click();
    }
}

//clicar_arvore(0);
function clicar_acao (indice) {
    document.getElementById("ifrVisualizacao").onload = function() {
        var visualizacao = document.getElementById("ifrVisualizacao").contentWindow.document;
        var arvore_acoes = visualizacao.getElementById("divArvoreAcoes")
        var acao = arvore_acoes.childNodes[indice];
        acao.click();
    }
}

clicar_acao(0);

//TODO: Função deve aguardar o carregamento da página para executar
function clicar_documento (indice) {
    document.getElementById("frmDocumentoEscolherTipo").onload = function() {
        alert("Leu lista")
        memorando=visualizacao.getElementById("lnkInfraID-165").nextElementSibling.nextElementSibling;
        memorando.click();
    }
}

/*
TODO: html botao SEI
<a class="botaoSEI">
<img class="infraCorBarraSistema" src="imagens/sei_controle_processos.gif" alt="Controle de Processos" title="Controle de Processos">
</a>
*/

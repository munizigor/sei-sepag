function clicar_acao (indice) {
    document.getElementById("ifrVisualizacao").onload = function() {
        var visualizacao = document.getElementById("ifrVisualizacao").contentWindow.document;
        var arvore_acoes = visualizacao.getElementById("divArvoreAcoes")
        var acao = arvore_acoes.childNodes[indice];
        acao.click();
    }
}

//clicar_acao(0);

//TODO: Função deve aguardar o carregamento da página para executar
function clicar_documento (indice) {
    document.getElementById("frmDocumentoEscolherTipo").onload = function() {
        alert("Leu lista")
        memorando=visualizacao.getElementById("lnkInfraID-165").nextElementSibling.nextElementSibling;
        memorando.click();
    }
}

function criar_botao_sepag () {
    document.getElementById("ifrVisualizacao").onload = function() {
        var visualizacao = document.getElementById("ifrVisualizacao").contentWindow.document;
        var botaoSEPAG = visualizacao.createElement("a");
        botaoSEPAG.setAttribute("class","botaoSEI");
        botaoSEPAG.innerHTML = '<img class="infraCorBarraSistema" alt="Inserir Documentos SEPAG" title="Inserir Documentos SEPAG">'
        imgSEPAG = botaoSEPAG.childNodes[0];
        imgSEPAG.setAttribute("src",chrome.runtime.getURL("img/icon_cbm.jpeg"));
        visualizacao.getElementById("divArvoreAcoes").appendChild(botaoSEPAG);
    }
}
criar_botao_sepag ();

/*
TODO: html botao SEI
<a class="botaoSEI">
<img class="infraCorBarraSistema" src="imagens/sei_controle_processos.gif" alt="Controle de Processos" title="Controle de Processos">
</a>
*/

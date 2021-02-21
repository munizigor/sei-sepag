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
//    window.onload = function() {
//        var visualizacao = document.getElementById("ifrVisualizacao").contentWindow.document;
        console.log(document.readyState)
        console.log(document.body.innerHTML)
        var botaoSEPAG = document.createElement("div");
//        botaoSEPAG.setAttribute("class","cke_button");
        botaoSEPAG.setAttribute("id","docsSEPAG");
        botaoSEPAG.setAttribute("class","cke_top");
//        botaoSEPAG.innerHTML = '<img alt="Inserir Documentos SEPAG" title="Inserir Documentos SEPAG">'
//        var imgSEPAG = botaoSEPAG.childNodes[0];
//        imgSEPAG.setAttribute("src",chrome.runtime.getURL("img/icon_cbm.jpeg"));

botaoSEPAG.innerHTML = `
                        <div>
                          <label for="tipo_doc">Documentos SEPAG</label>
                          <select id="tipo_doc">
                             <option value=""></option>
                             <option value="DIARIAS_plan_calc">DIÁRIAS - Planilha de Cálculo</option>
                             <option value="RRM_fard">RRm - Fardamento por passagem pra RRm</option>
                             <option value="RECON_calculo">RECONHECIMENTO DE DÍVIDA - Cálculo</option>
                             <option value="RESS_calculo">RESSARCIMENTO AO ERÁRIO - Cálculo</option>
                             <option value="CEDIDO_calculo">PESSOAL CEDIDO - Cálculo Ressarcimento</option>
                             <option value="DEP_calculo_acerto">DEPENDENTES - Cálculo de Valores de Acerto em Folha</option>
                             <option value="GRAT_calculo_acerto">GRATIFICAÇÕES - Cálculo de Valores de Acerto em Folha</option>
                          </select>
                        </div>
`

        document.getElementById("divComandos").insertAdjacentElement('afterend',botaoSEPAG);
//    }
}
//alert('ok');
criar_botao_sepag ();

//TODO: buscar dados para POST


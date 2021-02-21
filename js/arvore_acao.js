var tipo_doc_div = `
<span class="cke_toolgroup" role="presentation">
  <label for="tipo_doc">Documentos SEPAG</label>
  <select id="tipo_doc" class="cke_button cke_button_disabled">
     <option value=""></option>
     <option value="DIARIAS_plan_calc">DIÁRIAS - Planilha de Cálculo</option>
     <option value="RRM_fard">RRm - Fardamento por passagem pra RRm</option>
     <option value="RECON_calculo">RECONHECIMENTO DE DÍVIDA - Cálculo</option>
     <option value="RESS_calculo">RESSARCIMENTO AO ERÁRIO - Cálculo</option>
     <option value="CEDIDO_calculo">PESSOAL CEDIDO - Cálculo Ressarcimento</option>
     <option value="DEP_calculo_acerto">DEPENDENTES - Cálculo de Valores de Acerto em Folha</option>
     <option value="GRAT_calculo_acerto">GRATIFICAÇÕES - Cálculo de Valores de Acerto em Folha</option>
  </select>
</span>
`
var tabela_teste = `
<table id="tabela_vazia" style="margin-left:auto;margin-right:auto;width:500px;"
       cellspacing="1" cellpadding="1" border="1">
    <tbody>
        <tr>
            <th colspan="3">TABELA TESTE</th>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
`

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
        console.log(document.readyState)
        console.log(document.body.innerHTML)
        var botaoSEPAG = document.createElement("div");
        botaoSEPAG.setAttribute("id","docsSEPAG");
        botaoSEPAG.setAttribute("class","cke_top");
//        imgSEPAG.setAttribute("src",chrome.runtime.getURL("img/icon_cbm.jpeg"));
//TODO: Fazer com que lista seja um popup html.
        botaoSEPAG.innerHTML = tipo_doc_div
        document.getElementById("divComandos").insertAdjacentElement('afterend',botaoSEPAG);
        var seletor_doc = document.getElementById('tipo_doc')
        seletor_doc.onchange = function(){
            alert('Inserir documento ' + seletor_doc.value + ' na caixa de texto')
        }
}
criar_botao_sepag ();



//TODO: buscar dados para POST


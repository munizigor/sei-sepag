function getURL(url) {
    return chrome.runtime.getURL(url);
}
var tipo_doc_div = `
<span class="cke_toolgroup" role="presentation">
    <a id="tipo_doc_button" class="cke_button cke_button_off" title="Documentos automatizados da SEPAG"
        tabindex="-1" target="_blank" href="`+
        getURL("html/teste.html")
        +`"hidefocus="true" role="button" aria-haspopup="false">
            <img class="cke_button_icon"
                src="https://sei.df.gov.br/sei/editor/ck/plugins/linksei/images/sei.png">
            <span id="tipo_doc_label" class="cke_button" aria-hidden="false">Documentos SEPAG</span>
    </a>
</span>

<span class="cke_toolgroup" role="presentation">
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
</span>
`
console.log(chrome.runtime.getURL("img/icon_cbm.jpeg"))
//TODO: Nao carrega imagem icon_cbm.jpeg


//</span>
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

function insertTextAtCursor(el, text) {
    var val = el.value, endIndex, range;
    if (typeof el.selectionStart != "undefined" && typeof el.selectionEnd != "undefined") {
        endIndex = el.selectionEnd;
        el.value = val.slice(0, el.selectionStart) + text + val.slice(endIndex);
        el.selectionStart = el.selectionEnd = endIndex + text.length;
    } else if (typeof document.selection != "undefined" && typeof document.selection.createRange != "undefined") {
        el.focus();
        range = document.selection.createRange();
        range.collapse(false);
        range.text = text;
        range.select();
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
            var campo_texto = document.getElementById('cke_4_contents').childNodes[1].contentWindow.document.body
            campo_texto.innerHTML = 'Inserir documento ' + seletor_doc.value;
            //TODO Inserir onde esta o cursor
            }
//TODO Ativar apenas quando clicar na caixa de texto
//        document.getElementById("cke_txaEditor_865").onclick = function(){
//            document.getElementById("tipo_doc").disabled=false;
//            }
        }

criar_botao_sepag ();



//TODO: buscar dados para POST


function criar_botao_sepag () {
        var botaoSEPAG = document.createElement("div");
        botaoSEPAG.setAttribute("class","cke_top");
        botaoSEPAG.innerHTML = '<button type="button" id="docsSEPAG" onclick="toggleText()"> Documentos SEPAG</button>'
        document.getElementById("divEditores").insertAdjacentElement("afterbegin",botaoSEPAG);
        var seletor_doc = document.getElementById("tipo_doc")
        infosSEPAG = document.createElement("iframe");
        infosSEPAG.innerHTML = "TESTE";
        infosSEPAG.setAttribute("id","infosSEPAG");
        infosSEPAG.style.display="none";
        infosSEPAG.style.width="100%";
        infosSEPAG.setAttribute("class","cke_top");
        infosSEPAG.src = chrome.runtime.getURL("html/index.html");
        document.getElementById("docsSEPAG").insertAdjacentElement('afterend',infosSEPAG)
        document.getElementById("docsSEPAG").onclick = function() {
            text = document.getElementById("infosSEPAG");
            if (text.style.display === "none") {
                text.style.display = "block";
            } else {
                text.style.display = "none";
            }
        }
}

criar_botao_sepag ();



//TODO: buscar dados para POST


function criar_botao_sepag () {
        var botaoSEPAG = document.createElement("div");
        botaoSEPAG.setAttribute("class","cke_top");
        botaoSEPAG.innerHTML = '<button type="button" id="docsSEPAG"> Documentos SEPAG</button>'
        document.getElementById("divEditores").insertAdjacentElement("afterbegin",botaoSEPAG);
        var seletor_doc = document.getElementById("tipo_doc")
        infosSEPAG = document.createElement("iframe");
        infosSEPAG.setAttribute("id","infosSEPAG");
        infosSEPAG.style.display="none";
        infosSEPAG.style.width="30%";
        infosSEPAG.style.float="left";
        infosSEPAG.style.height="100%";
        infosSEPAG.style.position="absolute";
        infosSEPAG.setAttribute("class","cke_top");
        infosSEPAG.src = chrome.runtime.getURL("html/index.html");
        document.getElementById("frmEditor").insertAdjacentElement('beforebegin',infosSEPAG)
        document.getElementById("docsSEPAG").onclick = function() {
            sepag = document.getElementById("infosSEPAG");
            form = document.getElementById("frmEditor");
            if (sepag.style.display === "none") {
                sepag.style.display = "block";
                form.style.width = "68%"
                form.style.float = "right"
            } else {
                sepag.style.display = "none";
                form.style.width = "100%"
                form.style.float = ""
            }
        }
}

criar_botao_sepag ();



//TODO: buscar dados para POST


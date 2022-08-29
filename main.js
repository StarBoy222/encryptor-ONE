function encriptMessage() {

    text = document.getElementById("entrada-texto").value;

    let newElement = "";

    for (let i = 0; i < text.length; i++) {
        let element = text[i];
        
        if (element === "e") {
            newElement += "enter";
        } else if (element === "i") {
            newElement += "imes";
        } else if (element === "a") {
            newElement += "ai";
        } else if (element === "o") {
            newElement += "ober";
        } else if (element === "u") {
            newElement += "ufat";
        } else {
            newElement += element;
        }
    }

    document.getElementById("salida-texto").style.backgroundImage = "none";
    document.getElementById("salida-texto").value = newElement;
    document.getElementById("entrada-texto").value = "";
}

function desencriptMessage() {

    let text = document.getElementById("entrada-texto").value;

    x = ["enter", "imes", "ai", "ober", "ufat"];
    y = ["e", "i", "a", "o", "u"];
    
    for (let i = 0; i < 5; i++){
        if (text.includes(x[i])) {
            text = text.replaceAll(x[i],y[i])
        }
    }
            

    document.getElementById("salida-texto").style.backgroundImage = "none";
    document.getElementById("salida-texto").value = text;
    document.getElementById("entrada-texto").value = "";
}

function copy() {
    let copyText = document.querySelector("#salida-texto");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}




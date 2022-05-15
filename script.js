const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    mensagem.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    let codificar = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringEncriptada = stringEncriptada.toLowerCase();



    for (let i = 0; i < codificar.length; i++) {
        if (stringEncriptada.includes(codificar[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(codificar[i][0], codificar[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDescriptado = descriptar(inputTexto.value);
    mensagem.value = textoDescriptado;
    mensagem.style.backgroundImage = "none";
}

function descriptar(stringDescriptada) {
    let descodificar = [
        ["ai", "a"],
        ["enter", "e"],
        ["imes", "i"],
        ["ober", "o"],
        ["ufat", "u"]
    ];

    for (let i = 0; i < descodificar.length; i++) {
        if (stringDescriptada.includes(descodificar[i][0])) {
            stringDescriptada = stringDescriptada.replaceAll(descodificar[i][0], descodificar[i][1]);
        }
    }
    return stringDescriptada;
}

function btncopiar() {
    const textoCopiado = document.querySelector(".mensagem");
    textoCopiado.select();
    navigator.clipboard.writeText(textoCopiado.value);
    alert("Texto copiado,  cole ele na aréa de transferencia!");
    window.location.reload();


}

function btnLimpar() {
    const textlimpado = document.querySelector(".mensagem");
    mensagem.value = "";
    inputTexto.value = "";
    document.getElementById("mensagem").style.display = "block";
    inputTexto.value = "";
    inputTexto.focus();
    mensagem.style.backgroundImage = "";
}
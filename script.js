const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() { //nao esquecer do evento onclick
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage = "none";
    inputTexto.value = "";

}

function encriptar(stringEncriptada) {
    let matrizCodigo = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }

    return stringEncriptada;

}

function btnDescriptar() { //nao esquecer do evento onclick
    const textoDescriptado = descriptar(inputTexto.value)
    inputTexto.value = textoDescriptado;
    mensagem.style.backgroundImage = "";
    inputTexto.value = "";

}

function descriptar(stringDescriptada) {
    let matrizCodigo = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    stringDescriptada = stringDescriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDescriptada.includes(matrizCodigo[i][0])) {
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }

    return stringDescriptada;

}

function btncopiar() {
    let copiarTexto = document.querySelector(".mensagem");
    copiarTexto.select();
    document.execCommand("copy");
    mensagem.value = "";
    btnCopiar.style.display = "none";
    mensagem.style.display = "none";
    alert("Texto copiado para área de transferência");

}

function btnLimpar() {
    mensagem.value = "";
    inputTexto.value = "";
    document.getElementById("#limpar").style.display = "block";
    inputTexto.value = "";
    inputTexto.focus();
}
/* Las "llaves" de encriptación que utilizaremos son las siguientes:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/
let textoUsuario = document.getElementById('input-text');
let textoDevuelto = document.getElementById('output-text');

document.getElementById('boton-copiar').style.display = 'none';

function validarTexto(){
    let validador = document.getElementById('input-text').value.match(/^[a-z]+(\s[a-z]+)*$/); //expreció regular: valida que solo sean letras minúsculas y no empiece con espacio

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
};

function encriptar(textoParaEncriptar) {
    const llavesCripto = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoParaEncriptar = textoParaEncriptar.toLowerCase(); //medida de seguridad por las dudas.

    for (let i = 0; i < llavesCripto.length; i++) {
        if (textoParaEncriptar.includes(llavesCripto[i][0])) {
            textoParaEncriptar = textoParaEncriptar.replaceAll(llavesCripto[i][0], llavesCripto[i][1]);
        }
    }
    return textoParaEncriptar
};

function desencriptar(textoParaDesencriptar) {
    const llavesCripto = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoParaDesencriptar = textoParaDesencriptar.toLowerCase();

    for (let i = 0; i < llavesCripto.length; i++) {
        if (textoParaDesencriptar.includes(llavesCripto[i][1])) {
            textoParaDesencriptar = textoParaDesencriptar.replaceAll(llavesCripto[i][1], llavesCripto[i][0]);
        }
    }
    return textoParaDesencriptar
};

function btnEncriptar() {
    if(!validarTexto()){
        let textoEncriptado = encriptar(textoUsuario.value);
        textoDevuelto.value = textoEncriptado;
        textoDevuelto.style.background = 'none';
        document.getElementById('boton-copiar').style.display = 'block';
    }
};
function btnDesencriptar() {
    //desarrollar
};
function btnCopiar() {
    //desarrollar
};
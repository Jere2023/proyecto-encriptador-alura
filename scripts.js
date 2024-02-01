/* Las "llaves" de encriptación que utilizaremos son las siguientes:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/
let textoUsuario = '';
let textoDevuelto = '';
const llaveEncriptar = {
    a: 'ai',
    e: 'enter', 
    i: 'imes',
    o: 'ober',
    u: 'ufat'
};
const llaveDesencriptar = {};
/*El For siguiente asegura que llaveDesencriptar
se 'ACTUALISE' si se cambian las claves
y valores de llaveEncriptar*/
    for (var vocal in llaveEncriptar) {
    if (llaveEncriptar.hasOwnProperty(vocal)) {
        const valorEncriptado = llaveEncriptar[vocal];
        llaveDesencriptar[valorEncriptado] = vocal;
    }
    };
document.getElementById('boton-copiar').style.display = 'none';
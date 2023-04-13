function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");
    let copiar = document.getElementById("btn-copiar");

    let textoCifrado = texto
        .replace(/e/img, "enter")
        .replace(/o/img, "ober")
        .replace(/i/img, "imes")
        .replace(/a/img, "ai")
        .replace(/u/img, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.style.display = 'none';
        parrafo.textContent = textoCifrado;
        muneco.style.display = 'none';
        copiar.style.display = 'flex';
        Swal.fire("Listo", "¡Texto encriptado con exito!", "success");
    } else {
        muneco.src = "assets/img/muneco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        Swal.fire("Error", "¡Debes ingresar un texto!", "error");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");
    let copiar = document.getElementById("btn-copiar");

    let textoDescifrado = texto
        .replace(/enter/img, "e")
        .replace(/ober/img, "o")
        .replace(/imes/img, "i")
        .replace(/ai/img, "a")
        .replace(/ufat/img, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoDescifrado;
        tituloMensaje.style.display = 'none';
        parrafo.textContent = textoDescifrado;
        muneco.style.display = 'none';
        copiar.style.display = 'flex';
        Swal.fire("Listo", "¡Texto desencriptado con exito!", "success");
    } else {
        muneco.src = "assets/img/muneco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        Swal.fire("Error", "¡Debes ingresar un texto!", "error");
    }
}

function copiar() {
    let texto = document.getElementById("texto");
    texto.select();
    document.execCommand("copy");
    Swal.fire("Listo", "¡Texto copiado con exito!", "success");
}
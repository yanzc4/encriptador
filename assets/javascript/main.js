//funciones
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
        document.getElementById("encriptado").className = "encriptado2";
        document.getElementById("parrafo").className = "parrafo2";
        tituloMensaje.style.display = 'none';
        parrafo.textContent = textoCifrado;
        muneco.style.display = 'none';
        copiar.style.display = 'flex';
        Swal.fire("Listo", "¡Texto encriptado con exito!", "success");
        document.getElementById("texto").value = "";
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
        document.getElementById("encriptado").className = "encriptado2";
        document.getElementById("parrafo").className = "parrafo2";
        tituloMensaje.style.display = 'none';
        parrafo.textContent = textoDescifrado;
        muneco.style.display = 'none';
        copiar.style.display = 'flex';
        Swal.fire("Listo", "¡Texto desencriptado con exito!", "success");
        document.getElementById("texto").value = "";
    } else {
        muneco.src = "assets/img/muneco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        Swal.fire("Error", "¡Debes ingresar un texto!", "error");
    }
}


//funcion para copiar texto
function copiar() {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById("parrafo").innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    Swal.fire("Listo", "¡Texto copiado con exito!", "success");
}


//asignar funciones a los botones
document.getElementById("btn-encriptar").addEventListener("click", encriptar);
document.getElementById("btn-desencriptar").addEventListener("click", desencriptar);
document.getElementById("btn-copiar").addEventListener("click", copiar);



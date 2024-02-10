
//PROCESSAMENTO DO TEXTO
function processText(operation) {
  var inputText = document.getElementById("text").value;
// Verifica se o texto contém caracteres que não são letras minúsculas
if (/[^a-z\s]/.test(inputText)) {
  alert("Por favor, insira apenas letras minúsculas.");
  return;
}

// Se chegou até aqui, o texto está válido
console.log("Texto válido:", inputText);

  var resultTitle = document.getElementById("resultTitle");
  var resultText = document.getElementById("resultText");
  var imageElement = document.querySelector(".container__resultado img");

  if (operation === "encrypt") {
    showOverlay(); // Mostra a sobreposição
    setTimeout(function () {
      hideOverlay(); // Esconde a sobreposição após 2 segundos
      imageElement.style.display = "none";
      var encryptedText = encryptText(inputText);
      resultTitle.style.display = "none";
      // resultTitle.textContent = "Texto Criptografado";
      resultText.textContent = encryptedText;
    }, 2000);
  } else if (operation === "decrypt") {
    showOverlay(); // Mostra a sobreposição
    setTimeout(function () {
      hideOverlay(); // Esconde a sobreposição após 2 segundos
      imageElement.style.display = "none"; // Esconda a imagem para descriptografia
      var decryptedText = decryptText(inputText);
      resultTitle.style.display = "none";
      // resultTitle.textContent = "Texto Descriptografado";
      resultText.textContent = decryptedText;
    }, 2000);
  }
}

function showOverlay() {
  var overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.innerHTML =
    '<img src="img/isometric-server-transferring-data.gif" alt="Transferindo Dados">';
  document.body.appendChild(overlay);
}

function hideOverlay() {
  var overlay = document.querySelector(".overlay");
  if (overlay) {
    document.body.removeChild(overlay);
  }
}

//CRIPTOGRAFIA DO TEXTO

function encryptText(text) {
  return text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

//DESCRIPTOGRAFIA DO TEXTO

function decryptText(text) {
  return text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

//BOTÃO COPIAR
function copyToClipboard() {
  var resultText = document.getElementById("resultText");
  var textArea = document.createElement("textarea");
  textArea.value = resultText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert("Texto Copiado para a área de Transferência!");
}

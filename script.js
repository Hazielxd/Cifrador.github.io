function cipherText() {
  const alphabet = 'abcdefghijklmnñopqrstuvwxyz';
  var inputPalabra = document.getElementById('inputPalabra');
  var codigo = parseInt(document.getElementById('codigo').value);
  var result = document.getElementById('resultado');
  let originalMessage = inputPalabra.value;

  const onlyLettersPattern = /^[a-zñ]+$/;

  if (!onlyLettersPattern.test(originalMessage)) {
    alert("Ingresa solo letras del abecedario. No espacios, mayúsculas, números, etc.");
    return;
  }

  const numbers = /^[1-90]+$/;

  if (!numbers.test(codigo)) {
    alert("Ingresa un número en la casilla de contraseña.");
    return;
  }

  let encryptedMessage = '';

  for (let i = 0; i < originalMessage.length; i++) {
    let letra = originalMessage[i];
    let index = alphabet.indexOf(letra);

    if (index === -1) {
      
      encryptedMessage += letra;
    } else {
      let newLetterIndex = (index + codigo) % alphabet.length;
      encryptedMessage += alphabet[newLetterIndex];
    }
  }

  result.value = encryptedMessage;
}
function ciphertxeT() {
  const alphabet = 'zyxwvutsrqpoñnmlkjihgfedcba';
  var Palabra = document.getElementById('Palabra');
  var codigo = parseInt(document.getElementById('codigo').value);
  var resultada = document.getElementById('resultada');
  let originalMessage = Palabra.value;

  const onlyLettersPattern = /^[a-zñ]+$/;

  if (!onlyLettersPattern.test(originalMessage)) {
    alert("Ingresa solo letras del abecedario. No espacios, mayúsculas, números, etc.");
    return;
  }

  const numbers = /^[1-90]+$/;

  if (!numbers.test(codigo)) {
    alert("Ingresa un número en la casilla de contraseña.");
    return;
  }

  let encryptedMessage = '';

  for (let i = 0; i < originalMessage.length; i++) {
    let letra = originalMessage[i];
    let index = alphabet.indexOf(letra);

    if (index === -1) {
      
      encryptedMessage += letra;
    } else {
      let newLetterIndex = (index + codigo) % alphabet.length;
      encryptedMessage += alphabet[newLetterIndex];
    }
  }

  resultada.value = encryptedMessage;
}
// Mostrar el lenght de la pass
const rangeInput = document.getElementById('inputRange');
const rangeInputValue = document.getElementById('inputRangeValue');
rangeInput.addEventListener('input', () => {
  const lenght = rangeInput.value;
  rangeInputValue.textContent = 'LENGTH: ' + lenght;
});

// Caracteres aleatorios
generateRandomCaracters = length => {
  const randomLettersNumbers =
    'AQSWDEFRGTHYJUKILOÑPZXCVBNMaqswdefrgthyjukiloñpzxcvbnm1234567890%-!¡;.,*{}$&/()[]?¿';
  let result = '';

  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * randomLettersNumbers.length);
    result += randomLettersNumbers.charAt(random);
  }
  return result;
};

// Mostrar los caracteres aleatorios en el campo text
const inputText = document.getElementById('pass');
const inputTextValue = document.getElementById('generatePass');
inputTextValue.addEventListener('click', () => {
  const lenght = rangeInput.value;
  inputText.value = generateRandomCaracters(lenght);
});

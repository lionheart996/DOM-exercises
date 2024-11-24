function solve() {
  const textElement = document.querySelector('#text');
  const namingConventionElement = document.querySelector('#naming-convention');
  const resultElement = document.querySelector('#result');

  const text = textElement.value.trim(); // Get input text
  const namingConvention = namingConventionElement.value.trim(); // Get naming convention

  let wordsArray = text.split(' ').map(word => word.toLowerCase());

  let result = '';

  if (namingConvention === 'Camel Case') {
    result = wordsArray
      .map((word, index) =>
        index === 0
          ? word
          : word[0].toUpperCase() + word.slice(1)
      )
      .join('');
  } else if (namingConvention === 'Pascal Case') {
    result = wordsArray
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join('');
  } else {
    result = 'Error!';
  } 

  resultElement.textContent = result;
}
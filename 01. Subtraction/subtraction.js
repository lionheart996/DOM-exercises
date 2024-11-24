function subtract() {
    const firstNum = document.querySelector('#firstNumber');
    const secondNum = document.querySelector('#secondNumber')

    const resultElement = document.querySelector('#result')

    result = Number(firstNum.value) - Number(secondNum.value);

    resultElement.textContent = result

}
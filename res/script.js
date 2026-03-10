/**
 * Invierte el orden de una cadena de texto
 * @param {string} str - La cadena a invertir
 * @returns {string} - La cadena invertida
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * Maneja el evento de inversión:
 * obtiene el input, valida, invierte y muestra el resultado
 */
function handleReverse() {
    const inputElement = document.getElementById('inputText');
    const resultElement = document.getElementById('result');
    const resultContainer = document.getElementById('resultContainer');

    const inputValue = inputElement.value.trim();

    // Eliminar animación previa
    resultElement.classList.remove('animate');

    // Forzar reflow para reiniciar la animación
    void resultElement.offsetWidth;

    if (inputValue === '') {
        resultElement.textContent = '⚠ Por favor, introduce un texto';
        resultElement.classList.add('error', 'animate');
        resultContainer.classList.remove('has-result');
        return;
    }

    const reversed = reverseString(inputValue);

    resultElement.textContent = reversed;
    resultElement.classList.remove('error');
    resultElement.classList.add('animate');
    resultContainer.classList.add('has-result');
}

// Permitir ejecutar con la tecla Enter
document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById('inputText');
    inputElement.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleReverse();
        }
    });
});

const input = document.getElementById('validation-input');
const totalLength = input.getAttribute('data-length');
const inTotalLenght = parseInt(totalLength, 7);
input.oninput = function () {
    if (input.value.length === inTotalLenght) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
   if (input.value.length === 0) {
        input.classList.remove('valid');
        input.classList.remove('invalid');
    }
    if (input.value.length !== inTotalLenght && input.value.length !== 0) {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
}
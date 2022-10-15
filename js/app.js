// generate pin
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        // console.log("get three digit", pin)
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

// typed pin
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})

// pin matching
function verifyPin() {
    const generatePin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;
    const failNotification = document.getElementById('notify-success');
    const successNotification = document.getElementById('notify-fail');
    if (generatePin == typedPin) {
        failNotification.style.display = 'block';
        successNotification.style.display = 'none';
    } else {
        successNotification.style.display = 'block';
        failNotification.style.display = 'none';
    }
}
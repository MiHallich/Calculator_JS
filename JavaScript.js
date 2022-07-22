

let text = " ";




let first
let second
let result
let to_do

function button1() {
    first = document.getElementById('input_value').value;
    document.getElementById('input_value').value = '';
    text += String(first) + ' + ';
    to_do = 1;

}

function button2() {
    first = document.getElementById('input_value').value;
    document.getElementById('input_value').value = '';
    text += String(first) + ' - ';
    to_do = 2;
}

function button3() {
    first = document.getElementById('input_value').value;
    document.getElementById('input_value').value = '';
    text += String(first) + ' * ';
    to_do = 3;
}

function button4() {
    first = document.getElementById('input_value').value;
    document.getElementById('input_value').value = '';
    text += String(first) + ' / ';
    to_do = 4;
}

function button0() {
    if (first != undefined) {
        second = document.getElementById('input_value').value;
        console.log(to_do);
        switch (to_do) {
            case 1:
                result = parseInt(first) + parseInt(second);
                break;
            case 2:
                result = parseInt(first) - parseInt(second);
                break;
            case 4:
                if (second == 0) {
                    result = 'Error'
                } else {
                    result = first / second;
                }
                break;
            case 3:
                result = first * second;
                break;
        }

        text += String(second) + ' = ' + String(result) + '<br>';
        document.getElementById('results').innerHTML = text;
        document.getElementById('input_value').value = result;
    }

}



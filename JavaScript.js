let text = " ";
let first_number
let second_number
let result
let to_do

function update_value(symbol, action_type) {
    first_number = document.getElementById('input_value').value;
    document.getElementById('input_value').value = '';
    text += String(first_number) + ' ' + symbol + ' ';
    to_do = action_type;

}

function equal_function() {
    if (first_number != undefined) {
        second_number = document.getElementById('input_value').value;
        console.log(to_do);
        switch (to_do) {
            case 'sum':
                result = parseInt(first_number) + parseInt(second_number);
                break;
            case 'substraction':
                result = parseInt(first_number) - parseInt(second_number);
                break;
            case 'division':
                if (second == 0) {
                    result = 'Error'
                } else {
                    result = parseInt(first_number) / parseInt(second_number);
                }
                break;
            case 'multiplication':
                result = parseInt(first_number) * parseInt(second_number);
                break;
        }

        text += String(second_number) + ' = ' + String(result) + '<br>';
        document.getElementById('results').innerHTML = text;
        document.getElementById('input_value').value = result;
    }

}

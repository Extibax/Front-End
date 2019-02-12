function sum() {
    var number_1 
    = parseFloat(document.getElementById('number_1').value);
    var number_2 
    = parseFloat(document.getElementById('number_2').value);
    var result 
    = number_1 + number_2;

    document.getElementById('result').value = result;
}
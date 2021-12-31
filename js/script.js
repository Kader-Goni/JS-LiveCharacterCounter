



function add (){
    var num1 = document.getElementById('firstInput').value;
    var num2 = document.getElementById('secondInput').value;

    var resultValue = parseInt(num1) + parseInt(num2); 
    document.getElementById('result').innerHTML = 'Result = ' + resultValue; 
}


function sub (){
    var num1 = document.getElementById('firstInput').value;
    var num2 = document.getElementById('secondInput').value;

    var resultValue = num1 - num2; 
    document.getElementById('result').innerHTML = 'Result = ' + resultValue;
}


function multi (){
    var num1 = document.getElementById('firstInput').value;
    var num2 = document.getElementById('secondInput').value;

    var resultValue = num1 * num2; 
    document.getElementById('result').innerHTML = 'Result = ' + resultValue;
}


function divi (){
    var num1 = document.getElementById('firstInput').value;
    var num2 = document.getElementById('secondInput').value;

    var resultValue = num1 / num2; 
    document.getElementById('result').innerHTML = 'Result = ' + resultValue;
}
var input = document.getElementById('input');
var total = document.getElementById('total');

function totalChars (){
    var totalChars = input.value.length;

    total.innerHTML = totalChars;
}


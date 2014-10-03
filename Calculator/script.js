function sum(first, second) {
    return first + second;
}

function substract(first, second) {
    return first - second;
}

function divide(first, second) {
    return first / second;
}

function multiply(first, second) {
    return first * second;
}

var firstValue = "";
var secondValue = "";
var operator = "";

$(document).ready(function() {
    $("#operators a:not('#equal')").click(function() {
        operator = $(this).html();
        secondValue = firstValue;
        firstValue = "";
        $("#total").html(firstValue);
    });
    
    $("#numbers a").click(function() {
        firstValue = firstValue + $(this).html();
        $("#total").html(firstValue);
    });
    
    $("#allClear").click(function() {
        firstValue = "";
        secondValue = "";
        operator = "";
        $("#total").html(firstValue);
    });
    
    $("#equal").click(function() {
        var result = "";
        firstValue = parseInt(firstValue);
        secondValue = parseInt(secondValue);
        switch (operator)
        {
            case "+":
                result = sum(firstValue, secondValue);
                break;
            case "-":
                result = substract(secondValue, firstValue);
                break;
            case "/":
                result = divide(secondValue, firstValue);
                break;
            case "*":
                result = multiply(firstValue, secondValue);
                break;
        }
        firstValue = result;
        secondValue = "";
        $("#total").html(result);
    });
    
});


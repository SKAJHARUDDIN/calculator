//Calculator


var num1 = prompt("Enter First Number : ");
var num2 = prompt("Enter Second Number : ");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

var sum = num1 + num2;
var sub = num1 - num2;
var mult = num1 * num2;
var div = num1 / num2;


document.write("Addition = " +sum+ "<br/>");
document.write("Subtraction = " +sub+ "<br/>");
document.write("Multiplication = " +mult+ "<br/>");
document.write("Division = " +div+ "<br/>");
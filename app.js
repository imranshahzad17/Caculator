var num1 = +prompt("ENTER YOUR FIRST VALUE");
var num2 = +prompt("ENTER YOUR SECOND VALUE");


var Add = num1 + num2;
var Sub = num1 - num2;
var Multi = num1 * num2;
var Div = num1 / num2;

document.write(
    "<table border='2px'>"+
    "<tr>"+
    "<th>"+"ADDITION"+"</th>"
    +"<th>"+"SUBTRACT"+"</th>"
    +"<th>"+"MULTIPLY"+"</th>"
    +"<th>"+"DIVIDE"+"</th>"
    +"</tr>"+ 
    "<tr>"+
    "<td>"+Add+"</td>"+
    "<td>"+Sub+"</td>"+
    "<td>"+Multi+"</td>"+
    "<td>"+Div+"</td>"+
    "</tr>"
    +"</table>"
)
 console.log( num1 + num2);
 console.log( num1 - num2);
 console.log("Multi====>"+ num1 * num2);
 console.log("Div====>"+ num1 / num2);
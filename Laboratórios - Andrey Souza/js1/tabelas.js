for (var i = 1; i<=10; i++){
    document.writeln("<table class='tab' border='1'>")
    document.writeln("<tr> <th colspan = '2'> Produtos de " + i + "</th> </tr>")
    for (var j = 1; j<=10; j++){
        document.writeln("<tr> <td> "+ i +"x"+ j +" </td>")
        document.writeln("<td> "+ i*j +"</td> </tr>")
    }
    document.writeln("</table>")
}

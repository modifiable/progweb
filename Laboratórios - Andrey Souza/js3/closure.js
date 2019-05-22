function fora(a){
    var vez = 1;
    var b = a;

    function counter(){

        console.log("vez " + vez +"= " + b);
        b++;
        vez++; 
        return b
    }

    return counter
}

var inner = fora(1)
document.writeln(String(inner())) 
document.writeln(String(inner()))
document.writeln(String(inner()))
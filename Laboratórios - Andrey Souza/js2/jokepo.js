var ok = 1
var computer
var player
var total = 0
var opcoes = ["Papel", "Pedra", "Tesoura"]

while(ok==1){
    document.writeln("Escolha sua jogada: <br>")
    document.writeln("1 - Papel <br>")
    document.writeln("2 - Pedra <br>")
    document.writeln("3 - Tesoura <br>")

    computer = Math.floor(Math.random()*3)+1
    player = parseInt(prompt())

    if(computer==player){
        document.writeln("O computador jogou "+opcoes[computer]+"<br>")
        document.writeln("A rodada empatou!")
    }
    else if ((computer==1)&&(player==3)){
        document.writeln("O computador jogou "+opcoes[computer]+"<br>")
        document.writeln("Você ganhou!")
        total++
    }
    else if ((computer==2)&&(player==1)){
        document.writeln("O computador jogou "+opcoes[computer]+"<br>")
        document.writeln("Você ganhou!")
        total++
    }
    else if ((computer==3)&&(player==2)){
        document.writeln("O computador jogou "+opcoes[computer]+"<br>")
        document.writeln("Você ganhou!")
        total++
    }
    else{
        document.writeln("O computador jogou "+opcoes[computer]+"<br>")
        document.writeln("Você perdeu! A sua pontuação foi de "+total)
        ok=0
    }
}
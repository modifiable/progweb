(function(){
    var deserto;
    var pepita;
    var ceu = [];
    var florestinha = [];
    var pombos = [];
    var alturaPombos = [10, 30, 110];
    var cactos = 1;
    var count_nuvem = 0;
    var count_cacto = 0;
    const NUVENS = 4;
    const FPS = 600;
    var corre = true;
    var negativo = false;
    var velocidade = 1;
    var comeco = 0;
    var gameover = false;
    var auxv;

    numberSprites = [
        '-484px',
        '-494px',
        '-504px',
        '-514px',
        '-524px',
        '-534px',
        '-544px',
        '-554px',
        '-564px',
        '-574px'];
    var a = 0
    var n0 = 0;
    var n1 = 0;
    var n2 = 0;
    var n3 = 0;
    var n4 = 0;

    window.addEventListener("keydown", function (e) {
        if (e.key == "ArrowUp" && pepita.status==0 && comeco==1){ 
            pepita.status = 1;}
    });

    window.addEventListener("keydown", function (e) {
        auxv = velocidade;
        if (e.key == "p"){
            corre = !corre;
            velocidade = auxv;}
    });

    window.addEventListener("keydown", function (e) {
        if (e.key == "ArrowUp" && comeco == 0){ 
            comeco = 1;
            corre = false;
            pepita.status = 0; 
            }
    });

    window.addEventListener("keydown", function (e) {
        if (e.key == "ArrowDown" && pepita.status==0){
            pepita.status = 3;
        }
    });

    window.addEventListener("keyup", function (e) {
        if (e.key == "ArrowDown" && pepita.status==3){
            pepita.status = 0;
        }
    });


    class Nuvem {
        constructor(){
            
            this.cloud = document.createElement("div");
            this.cloud.className = "nuvem";
            this.cloud.style.right = "0px";
            this.cloud.style.top = String(Math.floor(Math.random()*100)) + "px";
            this.cloud.id = count_nuvem;
            deserto.desert.appendChild(this.cloud);
            count_nuvem++;
        }

        mover(){
            this.cloud.style.right = String(parseInt(this.cloud.style.right) + 1) + "px";
        }
    }

    class Cactos {
        constructor(){
            this.cacto = document.createElement("div");
            this.cacto.className = "suculenta";
            this.cacto.style.right = "0px";
            this.cacto.style.bottom = "0px";
            this.cacto.randomCacto = -1;
            this.cacto.id = "cacto_" + count_cacto;
            count_cacto++;
            deserto.desert.appendChild(this.cacto);
        }

        mover(){
            if(this.cacto.randomCacto == -1){
                this.cacto.randomCacto = Math.floor(Math.random()*3);
                if(this.cacto.randomCacto == 0){
                    
                    this.cacto.style.width = "19px";
                    this.cacto.style.height = "37px";
                    this.cacto.style.backgroundPositionX = "-227px";
                }
                if(this.cacto.randomCacto == 1){
                    
                    this.cacto.style.width = "26px";
                    this.cacto.style.height = "51px";
                    this.cacto.style.backgroundPositionX = "-331px";
                }
                if(this.cacto.randomCacto == 2){
                    
                    this.cacto.style.width = "51px";
                    this.cacto.style.height = "53px";
                    this.cacto.style.backgroundPositionX = "-430px";
                }
            }
            this.cacto.style.right = String(parseInt(this.cacto.style.right) + velocidade) + "px";
            
        }
    }

    class Pombo{
        constructor(){
            this.sprites = {
                'asaBaixoX':'-134px',
                'asaBaixoY':'-8px',
                'asaCimaX':'-180px',
                'asaCimaY':'-1px'
            };
            this.passaro = document.createElement("div");
            this.passaro.className = "pombo";
            this.passaro.style.right = "0px";
            this.passaro.style.width = "46px";
            this.passaro.style.height = "34px";
            this.passaro.style.bottom = alturaPombos[Math.floor(Math.random() * alturaPombos.length)] + "px";
            this.passaro.style.backgroundPositionX = this.sprites.asaBaixoX;
            this.passaro.style.backgroundPositionY = this.sprites.asaBaixoY;
            deserto.desert.appendChild(this.passaro);
        }

        mover(){
            this.passaro.style.backgroundPositionX = (this.passaro.style.backgroundPositionX == this.sprites.asaBaixoX)?this.sprites.asaCimaX:this.sprites.asaBaixoX;
            this.passaro.style.backgroundPositionY = (this.passaro.style.backgroundPositionY == this.sprites.asaBaixoY)?this.sprites.asaCimaY:this.sprites.asaBaixoY;
            this.passaro.style.right = String(parseInt(this.passaro.style.right) + velocidade) + "px";
        }
    }

    class Dinossauro {
        constructor(){
            this.sprites = {
                'emPe':'-765px',
                'emPe2':'-810px',
                'agachado1':'-941px',
                'agachado2':'-1001px',
                'pulando':'-678px',
                'machucada':'-853px',
                'dormindo':'-721px'
            };
            this.status = 0;
            this.alturaMaxima = "100px";
            this.dinossauro = document.createElement("div");
            this.dinossauro.className = "pepita";
            this.dinossauro.style.backgroundPositionX = this.sprites.emPe;
            this.dinossauro.style.bottom = "0px";  
            this.dinossauro.style.right = "1100px";
            this.dinossauro.style.backgroundPositionX = this.sprites.dormindo;
            
            deserto.desert.appendChild(this.dinossauro);   
        }
        mover(){
            if(this.status==0){
                if(this.dinossauro.style.width != "43px"){
                    this.dinossauro.style.width = "43px";
                    this.dinossauro.style.height = "47px";
                }
                this.dinossauro.style.backgroundPositionX = (this.dinossauro.style.backgroundPositionX == this.sprites.emPe)?this.sprites.emPe2:this.sprites.emPe;
            }
            else if(this.status==1){
                this.dinossauro.style.backgroundPositionX = this.sprites.pulando;
                this.dinossauro.style.bottom = (parseInt(this.dinossauro.style.bottom) + 1) + "px";
                if (this.dinossauro.style.bottom == this.alturaMaxima){
                    this.status = 2;
                }
            }
            else if (this.status == 2) {
                this.dinossauro.style.bottom = (parseInt(this.dinossauro.style.bottom) - 1) + "px";
                if (this.dinossauro.style.bottom == "0px") this.status = 0;
            }else if (this.status == 3) {
                if(this.dinossauro.style.width != "59px"){
                    this.dinossauro.style.width = "59px";
                }
                this.dinossauro.style.backgroundPositionX = (this.dinossauro.style.backgroundPositionX == this.sprites.agachado1)?this.sprites.agachado2:this.sprites.agachado1;
            }
        }
    }

    class Deserto {
        constructor() {
            this.desert = document.createElement("div");
            this.desert.className = "deserto";
            document.body.appendChild(this.desert);

            this.chao = document.createElement("div");
            this.chao.className = "xao";
            this.chao.style.backgroundPositionX = "0px";
            this.desert.appendChild(this.chao);

            this.endgame = document.createElement("div");
            this.endgame.className = "fim";
            this.endgame.style.bottom = "-10px";
            this.endgame.style.right = "2500px";
            this.desert.appendChild(this.endgame);

            this.number0 = document.createElement("div");
            this.number0.className = "number";
            this.number0.style.backgroundPositionY = "-2px";
            this.number0.style.backgroundPositionX = "-484px";
            this.number0.style.bottom = "120px";
            this.number0.style.right = "80px";
            this.desert.appendChild(this.number0);

            this.number1 = document.createElement("div");
            this.number1.className = "number";
            this.number1.style.backgroundPositionY = "-2px";
            this.number1.style.backgroundPositionX = "-484px";
            this.number1.style.bottom = "120px";
            this.number1.style.right = "70px";
            this.desert.appendChild(this.number1);

            this.number2 = document.createElement("div");
            this.number2.className = "number";
            this.number2.style.backgroundPositionY = "-2px";
            this.number2.style.backgroundPositionX = "-484px";
            this.number2.style.bottom = "120px";
            this.number2.style.right = "60px";
            this.desert.appendChild(this.number2);

            this.number3 = document.createElement("div");
            this.number3.className = "number";
            this.number3.style.backgroundPositionY = "-2px";
            this.number3.style.backgroundPositionX = "-484px";
            this.number3.style.bottom = "120px";
            this.number3.style.right = "50px";
            this.desert.appendChild(this.number3);

            this.number4 = document.createElement("div");
            this.number4.className = "number";
            this.number4.style.backgroundPositionY = "-2px";
            this.number4.style.backgroundPositionX = "-484px";
            this.number4.style.bottom = "120px";
            this.number4.style.right = "40px";
            this.desert.appendChild(this.number4);

            this.botao = document.createElement("button");
            this.botao.className = "botao";
            this.botao.style.bottom = "-10px";
            this.botao.style.right = "2500px";
            this.botao.addEventListener("click", function(){
                deserto.botao.style.bottom = "-10px";
                deserto.botao.style.right = "2500px";
                deserto.endgame.style.bottom = "-10px";
                deserto.endgame.style.right = "2500px";
                pepita.dinossauro.style.bottom = "0px";
                deserto.desert.style.backgroundColor = "white";
                deserto.chao.style.filter = "invert(0%)";
                comeco = 0;
                corre = true;
                pepita.status = pepita.dinossauro.style.backgroundPositionX = pepita.sprites.dormindo;
                florestinha.forEach(function(c){
                    (c.cacto).parentNode.removeChild((c.cacto));
                });
                florestinha = [];
                ceu.forEach(function(n){
                    (n.cloud).parentNode.removeChild((n.cloud));
                });
                ceu = [];
                pombos.forEach(function(p){
                    (p.passaro).parentNode.removeChild((p.passaro));
                });
                pombos = [];
                gameover = false;
                velocidade = 1;
                negativo = false;
                cactos = 1;
                deserto.number4.style.backgroundPositionX = numberSprites[0];
                deserto.number3.style.backgroundPositionX = numberSprites[0];
                deserto.number2.style.backgroundPositionX = numberSprites[0];
                deserto.number1.style.backgroundPositionX = numberSprites[0];
                deserto.number0.style.backgroundPositionX = numberSprites[0];
            });
            this.desert.appendChild(this.botao);
        }
        mover() {
            this.chao.style.backgroundPositionX = String(parseInt(this.chao.style.backgroundPositionX) - velocidade) + "px";
            a++;
            if(a%100==0){
                deserto.number4.style.backgroundPositionX = numberSprites[n0];
                n0++;
                if(n0==10){
                    n0=1;}
            }
            if(a%1000==0){
                console.log(a);
                deserto.number4.style.backgroundPositionX = numberSprites[0];
                n1++;
                deserto.number3.style.backgroundPositionX =numberSprites[n1];
                if(n1==10){n1=1;}
            }
            if(a%10000==0){
                deserto.number3.style.backgroundPositionX =numberSprites[0];
                n2++;
                deserto.number2.style.backgroundPositionX = numberSprites[n2];
                if(n2==10){n2=1;}
            }
            if(a%100000==0){
                deserto.number2.style.backgroundPositionX = numberSprites[0];
                n3++;
                deserto.number1.style.backgroundPositionX = numberSprites[n3];
                if(n3==10){n3=1;}
            }
            if(a%1000000==0){
                deserto.number1.style.backgroundPositionX = numberSprites[0];
                n4++;
                deserto.number0.style.backgroundPositionX = numberSprites[n4];
                if(n4==10){n4=1;}
            }
            
        }
    }

    function correr(){

        
        if(!pepita){
            pepita = new Dinossauro();}
        var pepiMiddle;
        var pepiTop;
        var pepiLeft;

        if(gameover){
                deserto.endgame.style.backgroundPositionY = "-15px";
                deserto.endgame.style.backgroundPositionX = "-484px";
                deserto.endgame.style.bottom = "90px";
                deserto.endgame.style.right = "600px";
                gameover = !gameover;
                deserto.botao.style.bottom = "50px";
                deserto.botao.style.right = "700px";
        }    
        
        if(!corre){

            deserto.mover();
            if(negativo){
                deserto.chao.style.filter = "invert(100%)";
                deserto.desert.style.backgroundColor = "black";
            }
            else{
                deserto.desert.style.backgroundColor = "white";
                deserto.chao.style.filter = "invert(0%)";
            }
            
            pepita.mover();
            pepiMiddle = ((parseInt(pepita.dinossauro.style.width)/2) + parseInt(pepita.dinossauro.style.right)) + "px";
            pepiLeft = (parseInt(pepita.dinossauro.style.right) + parseInt(pepita.dinossauro.style.width)) + "px";
            
            //nuvens......................
            if( Math.floor(Math.random()*1500) <= NUVENS){
                if(ceu.length == 20){
                    ceu.pop(0);
                    ceu.pop(1);
                    //console.log(ceu.length);
                }
                ceu.push(new Nuvem());
            }
            //vai apagando as nuvens antigos
            if(ceu.length == 20){

                (ceu[0].cloud).parentNode.removeChild((ceu[0].cloud));
                ceu.shift();
                (ceu[2].cloud).parentNode.removeChild((ceu[2].cloud));
                ceu.shift();
            }
            ceu.forEach(function(n) {
                n.mover();
            });


            //cactos..................
            if( Math.floor(Math.random()*1300) <= cactos){
                florestinha.push(new Cactos());
            }
            //vai apagando os cactos antigos
            if(florestinha.length == 20){

                (florestinha[0].cacto).parentNode.removeChild((florestinha[0].cacto));
                florestinha.shift();
                (florestinha[2].cacto).parentNode.removeChild((florestinha[2].cacto));
                florestinha.shift();
            }
            florestinha.forEach(function(c) {
                if(negativo){
                    c.cacto.style.filter = "invert(100%)";
                }
                else{
                    c.cacto.style.filter = "invert(0%)";
                }
                c.mover();
                var cleft = (parseInt(c.cacto.style.right) + parseInt(c.cacto.style.width)) + "px"; 
                var ctop = (parseInt(c.cacto.style.bottom) + parseInt(c.cacto.style.height) - 5)+ "px";
                var cmiddle = ((parseInt(c.cacto.style.width)/2) + parseInt(c.cacto.style.right)) + "px";
                
                if(cleft == (parseInt(pepita.dinossauro.style.right)+5)+"px" && pepita.dinossauro.style.bottom == "0px"){
                    console.log("1");
                    pepita.dinossauro.style.backgroundPositionX = pepita.sprites.machucada;
                    corre = true;
                    gameover = true;
                }   
                if((ctop == pepita.dinossauro.style.bottom) && ((parseInt(cleft)+5>=parseInt(pepiMiddle)) && (parseInt(c.cacto.style.right)-5<=parseInt(pepiMiddle)))){
                    console.log("2");
                    pepita.dinossauro.style.backgroundPositionX = pepita.sprites.machucada;
                    corre = true;
                    gameover = true;
                }
                else if((parseInt(ctop) >= parseInt(pepita.dinossauro.style.bottom) ) && ((parseInt(pepiLeft)-10>=parseInt(cmiddle)) && (parseInt(pepita.dinossauro.style.right)+10<=parseInt(cmiddle)))){
                    console.log("3");
                    console.log(ctop);
                    pepita.dinossauro.style.backgroundPositionX = pepita.sprites.machucada;
                    corre = true;
                    gameover = true;
                }
            });

            //pombos..................
            if( Math.floor(Math.random()*4000) <= 1){
                pombos.push(new Pombo());
            }
            //vai apagando os pombos antigos
            if(pombos.length == 20){

                (pombos[0].passaro).parentNode.removeChild((pombos[0].passaro));
                pombos.shift();
                (pombos[2].passaro).parentNode.removeChild((pombos[2].passaro));
                pombos.shift();
            }
            pombos.forEach(function(p) {
                if(negativo){
                    p.passaro.style.filter = "invert(100%)";
                }
                else{
                    p.passaro.style.filter = "invert(0%)";
                }
                p.mover();
                pepiTop = (parseInt(pepita.dinossauro.style.bottom) + parseInt(pepita.dinossauro.style.height)) + "px";
                var pleft = (parseInt(p.passaro.style.right) + parseInt(p.passaro.style.width)) + "px"; 
                var ptop = (parseInt(p.passaro.style.bottom) + parseInt(p.passaro.style.height) - 5)+ "px";
                if((pleft == (parseInt(pepita.dinossauro.style.right) + 10 + "px")) && ((ptop <= pepiTop) && (parseInt(ptop) <= 41))){ 
                    //se elx pular e bater de frente com o pombo
                    console.log("ops, desculpa 1");
                    console.log(ptop);
                    console.log(pepiTop);
                    pepita.dinossauro.style.backgroundPositionX = pepita.sprites.machucada;
                    corre = true;
                    gameover = true;
                }
                else if((parseInt(pleft) == parseInt(pepita.dinossauro.style.right) + 5) && (pepita.dinossauro.style.bottom == "0px" && parseInt(p.passaro.style.bottom)<=20)){
                    //se elx bater de frente com o pombo andando msm
                    console.log("ops, desculpa 2");
                    pepita.dinossauro.style.backgroundPositionX = pepita.sprites.machucada;
                    corre = true;
                    gameover = true;
                }
                else if((parseInt(ptop) == parseInt(pepita.dinossauro.style.bottom) + 5) && ((parseInt(pleft)+5>=parseInt(pepiMiddle)) && (parseInt(p.passaro.style.right)-5<=parseInt(pepiMiddle)))){
                    //se elx pular e cair em cima do pombo
                    console.log("ops, desculpa 3");
                    pepita.dinossauro.style.backgroundPositionX = pepita.sprites.machucada;
                    corre = true;
                    gameover = true;
                }
                else if((parseInt(p.passaro.style.bottom) == parseInt(pepiTop)-10) && ((parseInt(pleft)+5>=parseInt(pepiMiddle)) && (parseInt(p.passaro.style.right)-10<=parseInt(pepiMiddle)))){
                    //se elx pular e bater de cabeça no pombo
                    console.log("ops, desculpa 4");
                    pepita.dinossauro.style.backgroundPositionX = pepita.sprites.machucada;
                    corre = true;
                    gameover = true;
                }
                else if((parseInt(pepita.dinossauro.style.width) == 43)&&(parseInt(p.passaro.style.bottom) == 20)&&(parseInt(ptop) == parseInt(pepita.dinossauro.style.bottom) + 5)){
                    //se elx nao se abaixar e bater de cabeça no pombo
                    console.log("ops, desculpa 5");
                    pepita.dinossauro.style.backgroundPositionX = pepita.sprites.machucada;
                    corre = true;
                    gameover = true;
                }
            });
        }
    }

    function inicia(){

        deserto = new Deserto();
        
        console.log("aaaaaaaaaaaasdasdfvsdv");
        //dia e noite
        setInterval(function(){negativo = !negativo;
        }, 60000);
    
        //aumenta a velocidade
        setInterval(function(){velocidade = velocidade + 0.5;
        }, 10000);
        loooop = setInterval(correr, 1000/FPS);
    }

    inicia();
})();

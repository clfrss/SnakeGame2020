window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');

    document.addEventListener("keydown", function(e){
        console.log(e.keyCode);
        switch(e.keyCode){
            case 37:
                velx = -1;
                vely = 0;
                break;
                case 38:
                    velx = 0;
                    vely = -1;
                    break;
                    case 39:
                        velx = 1;
                        vely = 0;
                        break;
                        case 40:
                            velx = 0;
                            vely = 1;
                            break;
                        }
                    }); /*Explicando, como o case 40, por exemplo é para baixo, fazemos a velocidade ir para baixo adicionado o numero no plano cartesiano, y - então vai para baixo, só conferir com as outras, se quier ir para direita, acrescenta (positivo) no eixo x*/
                    
                    setInterval(jogo, 1000/10);
                    
                };
                
    var cobra = []; /*é um array porque ela vai crescer, precisa para ela ser alimentada, eu entendi*/
    var positionX = 10;
    var positionY = 10;
    var appleX = 15;
    var appleY = 15;
    var velx = 0;
    var vely = 0;
    var grid = 20;
    var tam = 5;
    var som;
    var pontos = document.getElementById('pontuação');

    function ponto() {
        pontos.innerHTML = 'Pontuação:  \n' + (cobra.length - 5) + ' Maçãs!';
    }

    function jogo(){
        
        som = new Audio("somcobra.mp3");
        
        positionX += velx;
        positionY += vely;
        
        if(positionX < 0){
            positionX = grid;
        }
        if (positionX > grid) {
            positionX = 0;
        }
        if (positionY < 0) {
            positionY = grid;
        }
        if (positionY > grid) {
            positionY = 0;
        }
        
        
        /*desenho do quadrado*/
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        /*desenho da cobra*/
        ctx.fillStyle = "green";
        for (var i = 0; i < cobra.length; i++){
            ctx.fillRect(cobra[i].x * grid, cobra[i].y * grid, grid - 1, grid - 1);
            /*o for ele é infinito, fazendo a cobrinha rodar para sempre*/
            if(cobra[i].x == positionX && cobra[i].y == positionY){
                tam = 5;     
            }
        }
        
        cobra.push({x:positionX, y:positionY})
        
        while(cobra.length > tam) {
            cobra.shift();
        }
        
        
        ctx.fillStyle = "red";
        ctx.fillRect(appleX * grid, appleY * grid, grid - 1, grid -1);
        
        if(positionX == appleX && positionY == appleY) {
            tam++;
            appleX = Math.floor(Math.random() * grid);
            appleY = Math.floor(Math.random() * grid);
            som.play();
            ponto();
        }
    }
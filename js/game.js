
let turno = 1;
let clicked = [];
const combinaciones = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

console.log(clicked);
window.addEventListener('load', function(){

    const tablero = document.querySelectorAll('.tablero');

    const divWin = document.getElementById('win');

    divWin.style.display = 'none';


    for(let i=0; i < tablero.length; i++){

        tablero[i].addEventListener('click', () => cambiar(i));

    }




})

function cambiar(i){
    const tablero = document.querySelectorAll('.tablero');


    if(clicked[i] == true){
        return;
    }
        
    clicked[i] = true;

    if(turno % 2 == 0){
        console.log('se hizo click player 2');
        
        tablero[i].classList.add("p2", 'animacion-p2');
    }else{
        console.log('se hizo click player 1');

        tablero[i].classList.add("p1", 'animacion-p1');
    }

    turno++;

    setTimeout(function(){
        comprobarVictoria();
    }, 600)


}


function comprobarVictoria(){
    const tablero = document.querySelectorAll('.tablero');

    for(let i=0; i< combinaciones.length; i++){
        const [a, b, c] = combinaciones[i];


        const classA = tablero[a].classList[1];
        const classB = tablero[b].classList[1];
        const classC = tablero[c].classList[1];

        console.log(classA);
        console.log(classB);
        console.log(classC);

        const divWin = document.getElementById('win');
        const result = document.getElementById('result');

        if((classA == "p1" || classA == "p2" ) && classA === classB && classA === classC){
            
            

            let ganador = classA == "p1" ? "Jugador 1" : "Jugador 2";


            for(let j=0; j < tablero.length; j++) {
                clicked[j] = true;
            }
            

            result.innerHTML = ""; 
            
            divWin.style.display = 'flex';
            const h3 = document.createElement('h3');
            h3.textContent = `El ganador es el jugador ${ganador}`;
            result.appendChild(h3);


            const main = document.getElementById('main');


            return;
        }

        if(turno > 9){

            result.innerHTML = ""; 
            divWin.style.display = 'flex';
            
            const h3 = document.createElement('h3');
            h3.textContent = "¡Empate! No quedan más turnos";
            result.appendChild(h3);
            return;
        }
    }
    
    console.log(clicked);
}



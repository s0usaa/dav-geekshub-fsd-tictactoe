let turno = true;
let fichaP1 = 3;
let fichaP2 = 3;
let tablero = Array.from(document.getElementsByClassName("cell"));

let tableroLogico = ["","","","","","","","",""];

let combinacionGanadora = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const comprueboGanador = () => {
    console.log(tableroLogico);

}



tablero.map(
    (casilla) => {
        casilla.addEventListener('click', ()=> {


            //Compruebo que SI puedo pintar la X o la O.
            if((casilla.innerHTML === "") && (fichaP1 > 0 || fichaP2 > 0)){

                //Aqui PINTO el simbolo, dependiendo del turno
                casilla.innerHTML = (turno) ? "X" : "O";

                //Después, dependiendo tambien de quien fuese el turno, le quito una ficha
                //de las que puede poner
                (turno) ? fichaP1-- : fichaP2--;


                //Finalmente, además de que en pantalla quede marcada, guardo la posición 
                //que ocupa en mi tablero lógico
                tableroLogico[casilla.id] = (turno) ? "X" : "O";

                comprueboGanador();

                //Cambiamos de turno
                turno = !turno;
            }
        })
    }
)

let players = {
    player1 : "",
    player2 : ""
}

//Capturo los input por su className...

let inputs = Array.from(document.getElementsByClassName("inputPlayers"));

//Mapeo los inputs de los jugadores..
inputs.map(
    elemento => {
        elemento.addEventListener("input", ()=>{

            //Según vamos escribiendo en el input, iremos actualizando el objeto players..

            for(let jugador in players){
                if(elemento.name == jugador){
                    //Ahora es cuando meto el valor en el objeto
                    players[jugador] = elemento.value;
                    
                    console.log(players)
                }
            }
        })
    }
)

//Creo la función que guardará en sessionStorage y después cambiará de pantalla

const nuevaPantalla = () => {

    //Si no tienen valor no continua

    if( (players.player1 === "") || (players.player2 === "")){

        return;
    }

    //Si tienen valor entra aqui y guarda los nombres

    sessionStorage.setItem("playersInfo", JSON.stringify(players));

    setTimeout(()=>{

        //Abre a la ventana del tablero
        window.open("/pages/tablero.html","_self");
    },500);
}
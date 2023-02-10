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

//Genero un objeto de JavaScript que va a tener una propiedad para cada player

let players = {
    player1 : "",
    player2 : ""
}

//Capturo los input por su className... recordad que los captura en una htmlcollection

let inputs = Array.from(document.getElementsByClassName("inputPlayers"));

//Mapeare el array inputs para darle a todos los elementos el evento addeventlistener input
//para controlar cuando vayamos escribiendo en ellos

inputs.map(
    elemento => {
        elemento.addEventListener("input", ()=>{

            //Según vamos escribiendo en el input, iremos actualizando el objeto players..
            //metiendo los valores en la propiedad correspondiente (player1 si escribo en el input de player1 por ejemplo)

            for(let jugador in players){
                if(elemento.name == jugador){
                    //Ahora es cuando meto el valor en el objeto
                    players[jugador] = elemento.value;
                }
            }
        })
    }
)

//Creo la función cambiaPantalla que guardará en sessionStorage y después cambiará de pantalla

const nuevaPantalla = () => {

    //Primero comprobamos que los nombres de los players NO esten vacios....

    if( (players.player1 === '') || (players.player2 === '') ){

        //Si uno de los 2 está vacio...ejecuto un return y así salgo de la función

        return;
    }

    //Si llego a este punto es porque los nombres si que tenían algún valor..

    sessionStorage.setItem("playersInfo", JSON.stringify(players));

    //Después de haber guardado .... cambiamos de página
    setTimeout(()=>{

        window.open("/pages/tablero.html","_self");
    },1000);
}
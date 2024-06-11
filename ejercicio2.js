const celdas=document.querySelectorAll('.caja');
const mensaje=document.getElementById('mensaje');
const botonReiniciar=document.getElementById('botonReiniciar');
let turno='X';
let juegoActivo=true;
let tablero=['', '', '','', '', '','', '', ''];

let combGanadoras=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

celdas.forEach((celda, index)=>{
    celda.addEventListener('click', ()=>{
        if (juegoActivo) {
            manejarClickCelda(index);
        }
        // manejarClickCelda(index);
    });
});

botonReiniciar.addEventListener('click', ()=>{
    reiniciarJuego();
});

mensaje.textContent=`Turno de ${turno}`;

function manejarClickCelda(index) {
    if (turno==='O') {
        celdas[index].innerHTML=`<div class="anillo"></div>`;
    }else{
        celdas[index].innerHTML=`<div class="cruz"></div>`;
    }
    if (tablero[index]!=='' || !juegoActivo) {
        return;
    }
    tablero[index]=turno;
    // celdas[index].textContent=turno;
    if (verificarGanador()) {
        mensaje.textContent=`¡${turno} ha ganado!`;
        juegoActivo=false;
        return;
    }
    if (tablero.every(celda=>celda!=='')) {
        mensaje.textContent='¡Es un empate!';
        juegoActivo=false;
        return;
    }
    turno=turno==='X'? 'O': 'X';
    mensaje.textContent=`Turno de ${turno}`;
}

function verificarGanador() {
    return combGanadoras.some(combinacion=>{
        return combinacion.every(index=>{
            return tablero[index]===turno;
        })
    })
}

function reiniciarJuego() {
    turno='X';
    juegoActivo=true;
    tablero=['', '', '','', '', '','', '', ''];
    celdas.forEach(celda=>{
        celda.textContent='';
    });
    mensaje.textContent=`Turno de ${turno}`;
}
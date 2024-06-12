// const cajas=document.querySelectorAll('.caja');
const board=document.getElementById('board');
const juego_nuevo=document.getElementById('juego_nuevo');
const rows=6, cols=3;
const totalPairs=rows*cols;
let cards=[];
let matchedCards=[];
let firstCard=null;
let secondCard=null;
let lockBoard=false;

onload=()=>{
    cargar_tablero();
};

juego_nuevo.onclick=()=>{
    cards=[];
    board.innerHTML='';
    cargar_tablero();
    matchedCards=[];
};

function createCard(value){
    const card=document.createElement('div');
    card.classList.add('caja', 'hidden');
    card.dataset.value=value;
    card.innerHTML=value;
    card.addEventListener('click', onCardClick);
    return card;
}

function onCardClick(e) {
    if (lockBoard) return;
    const card=e.target;
    if (card===firstCard) return;
    card.classList.remove('hidden');
    if (!firstCard){
        firstCard=card;
        return;
    }
    secondCard=card;
    lockBoard=true;
    if (firstCard.dataset.value===secondCard.dataset.value) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        disabledCards(firstCard, secondCard);
        resetBoard();
    }else{
        setTimeout(() => {
            firstCard.classList.add('hidden');
            secondCard.classList.add('hidden');
            resetBoard();
        }, 1000);
    }
}

function resetBoard(){
    // [firstCard, secondCard, lockBoard]=[null, null, false];
    firstCard=null;
    secondCard=null;
    lockBoard=false;
    checkWin();
}

function checkWin(){
    /* matchedCards=document.querySelectorAll('.card .matched');
    console.log(matchedCards.length);
    if (matchedCards.length===cards.length) {
        alert('¡Felicidades, encontraste todas de las parejas!');
        cards=[];
        board.innerHTML='';
        cargar_tablero();
        matchedCards=[];
    } */

    const hiddenCards=document.querySelectorAll('.caja.hidden');
    if (hiddenCards.length===0) {
        alert('¡Felicidades, encontraste todas de las parejas!');
        cards=[];
        board.innerHTML='';
        cargar_tablero();
        matchedCards=[];
    }
}

function disabledCards(card1, card2) {
    card1.classList.add('disabled');
    card1.removeEventListener('click', onCardClick);
    card2.classList.add('disabled');
    card2.removeEventListener('click', onCardClick);
}

function cargar_tablero() {
    for(let i=1; i<=totalPairs; i++){
        cards.push(i, i);
    }
    if ((rows)% 2!==0) {
        cards.push(0);
    }
    cards.sort(()=>0.5-Math.random());
    for(let i=0;i<cards.length;i++){
        const card=createCard(cards[i]);
        board.appendChild(card);
    }
}
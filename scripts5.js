let contenedor=document.getElementById("contenedor");
const maxin=101;

/* for(let i=1;i<maxin;i++){
    // console.log(i);
    let dd=document.createElement("div");
    const min=0;
    const max=256;
    let r=randInt(min, max);
    let g=randInt(min, max);
    let b=randInt(min, max);
    dd.style.backgroundColor=`rgb(${r}, ${g}, ${b})`;
    contenedor.appendChild(dd);
    // console.log(Math.floor(Math.random() * (max-min))+min);
} */

let nint=1;
let inter=setInterval(()=>{
    crea_div();
    nint++;
    if(nint==maxin){
        clearInterval(inter);
        nint=0;
    }
}, 50);

function randInt(max, min){
    return Math.floor(Math.random()*(max-min))+min;
}

function crea_div(){
    let dd=document.createElement("div");
    const min=0;
    const max=256;
    let r=randInt(min, max);
    let g=randInt(min, max);
    let b=randInt(min, max);
    dd.style.backgroundColor=`rgb(${r}, ${g}, ${b})`;
    contenedor.appendChild(dd);
}
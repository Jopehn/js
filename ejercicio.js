const izq=document.getElementById('izq');
const der=document.getElementById('der');
const arriba=document.getElementById('arriba');
const abajo=document.getElementById('abajo');
const centrar=document.getElementById('centrar');
const pelota=document.getElementById('pelota');
const contenedor=document.getElementById('contenedor');
const max=400;
const paso=10;
let posActualx, posActualy;

onload=()=>{
    centrar_circulo();
}

centrar.onclick=()=>{
    centrar_circulo();
}

izq.onclick=()=>{
    posActualx=parseInt(pelota.style.left)||0;
    if (posActualx>0 && posActualx<max) {
        pelota.style.left=(posActualx-paso)+'px';
    }else{
        // centrar_circulo();
        bootbox.alert({
            message: 'Se fue afuera de los bordes',
            size: 'small',
            centerVertical: true,
            callback: ()=>{
                centrar_circulo();
            }
        });
    }
};

der.onclick=()=>{
    posActualx=parseInt(pelota.style.left)||0;
    if (posActualx>=0 && posActualx<max) {
        pelota.style.left=(posActualx+paso)+'px';
    }else{
        // centrar_circulo();
        bootbox.alert({
            message: 'Se fue afuera de los bordes',
            size: 'small',
            centerVertical: true,
            callback: ()=>{
                centrar_circulo();
            }
        });
    }
}

arriba.onclick=()=>{
    posActualy=parseInt(pelota.style.top)||0;
    if(posActualy>0 && posActualy<max){
        pelota.style.top=(posActualy-paso)+'px';
    }else{
        // centrar_circulo();
        bootbox.alert({
            message: 'Se fue afuera de los bordes',
            size: 'small',
            centerVertical: true,
            callback: ()=>{
                centrar_circulo();
            }
        });
    }
}
abajo.onclick=()=>{
    posActualy=parseInt(pelota.style.top)||0;
    if (posActualy>0 && posActualy<max) {
        pelota.style.top=(posActualy+paso)+'px';
    }else{
        // centrar_circulo();
        bootbox.alert({
            message: 'Se fue afuera de los bordes',
            size: 'small',
            centerVertical: true,
            callback: ()=>{
                centrar_circulo();
            }
        });
    }
}

function centrar_circulo() {
    const contRect=contenedor.getBoundingClientRect();
    const circRect=pelota.getBoundingClientRect();
    const top=(contRect.height-circRect.height)/2;
    const left=(contRect.width-circRect.width)/2;
    pelota.style.top=top+'px';
    pelota.style.left=left+'px';
    posActualx=posActualy=0;
}
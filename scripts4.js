const btn2=document.getElementById("btn2");
let modo='oscuro';
let estilo=document.getElementById("estilo");
btn2.onclick=(()=>{
    if (modo=='oscuro') {
        estilo.href='../src/estilos.css';
        btn2.innerHTML='Modo claro';
        modo="claro";
    } else {
        estilo.href='../src/styles.css';
        btn2.innerHTML='Modo oscuro';
        modo='oscuro';
    }
});
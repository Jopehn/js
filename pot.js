let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let btn_pot = document.getElementById("btn_pot");
let resultado = document.getElementById("resultado");

btn_pot.addEventListener("click", () => {
    num1.select();
    let a = parseFloat(num1.value) ;
    let b = parseFloat(num2.value) ;
    let c = a ** b;
    if (isNaN(a) || isNaN(b)) {
        alert('Ingrese un número');
        resultado.innerHTML='';
    }else{
        resultado.innerHTML=c;
    }
});
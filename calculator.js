const txt1=document.getElementById('num1');
const txt2=document.getElementById('num2');
const btn_sumar=document.getElementById('btn_sumar');
const btn_restar=document.getElementById('btn_restar');
const btn_multi=document.getElementById('btn_multiplicar');
const btn_divide=document.getElementById('btn_dividir');
const btn_pow=document.getElementById('btn_potencia');
const btn_borrar=document.getElementById('btn_borrar');
const resultado=document.getElementById('resultado');

onload=function(){
	borrar();
};
txt1.addEventListener('click', function(e){
	txt1.value='';
});
txt2.addEventListener('click', function(e){
	txt2.value='';
});
btn_sumar.addEventListener('click', function(e){
	let a=parseFloat(txt1.value);
	let b=parseFloat(txt2.value);
	let c=a+b;
	if (isNaN(c)) {
		resultado.innerHTML='Ingresar números';
	}else{
		resultado.innerHTML=c;
	}
});
btn_restar.addEventListener('click', function(e){
	let a=parseFloat(txt1.value);
	let b=parseFloat(txt2.value);
	let c=a-b;
	if (isNaN(c)) {
		resultado.innerHTML='Ingresar números';
	}else{
		resultado.innerHTML=c;
	}
});
btn_multi.addEventListener('click', function(e){
	let a=parseFloat(txt1.value);
	let b=parseFloat(txt2.value);
	let c=a*b;
	if (isNaN(c)) {
		resultado.innerHTML='Ingresar números';
	}else{
		resultado.innerHTML=c;
	}
});
btn_divide.addEventListener('click', function(e){
	let a=parseFloat(txt1.value);
	let b=parseFloat(txt2.value);
	let c;
	if (isNaN(a) || isNaN(b)) {
		resultado.innerHTML='Ingresar números';
	}else{
		if (b==0) {
			resultado.innerHTML='División por 0';
		}else{
			c=a/b;
			resultado.innerHTML=c;
		}
	}
});
btn_pow.addEventListener('click', function(e){
	let a=parseFloat(txt1.value);
	let b=parseFloat(txt2.value);
	let c=a**b;
	if (isNaN(c)) {
		resultado.innerHTML='Ingresar números';
	}else{
		resultado.innerHTML=c;
	}
});
btn_borrar.addEventListener('click', function(e){
	borrar();
});
function borrar() {
	txt1.value=0;
	txt2.value=0;
	resultado.innerHTML=0;
}
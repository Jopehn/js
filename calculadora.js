const txt1=document.getElementById('num1');
const txt2=document.getElementById('num2');
const btns=document.querySelectorAll('.btnx');
const btn_borrar=document.getElementById('btn_borrar');
const resultado=document.getElementById('resultado');

onload=function(){
	borrar();
}
txt1.addEventListener('click', function(){
	txt1.value='';
});
txt2.addEventListener('click', function(){
	txt2.value='';
});
btns.forEach(function(e){
	e.addEventListener('click', function(){
		let num1=parseFloat(txt1.value);
		let num2=parseFloat(txt2.value);
		let res;
		// console.log(e.dataset.value);
		if (e.dataset.value==='+') {
			res=num1+num2;
			if (isNaN(res)) {
				resultado.innerHTML='Introducir números';
			}else{
				resultado.innerHTML=res;
			}
		}else if(e.dataset.value==='-'){
			res=num1-num2;
			if (isNaN(res)) {
				resultado.innerHTML='Introducir números';
			}else{
				resultado.innerHTML=res;
			}
		}else if(e.dataset.value==='*'){
			res=num1*num2;
			if (isNaN(res)) {
				resultado.innerHTML='Introducir números';
			}else{
				resultado.innerHTML=res;
			}
		}else if (e.dataset.value==='/') {
			if (isNaN(num1) || isNaN(num2)) {
				resultado.innerHTML='Introducir números';
			}else{
				if (num2==0) {
					resultado.innerHTML='División por 0';
				}else{
					res=num1/num2;
					resultado.innerHTML=res;
				}
			}
		}else if (e.dataset.value==='^') {
			res=num1**num2;
			if (isNaN(num1) || isNaN(num2)) {
				resultado.innerHTML='Introducir números';
			} else {
				resultado.innerHTML=res;
			}
		}
	});
});
btn_borrar.addEventListener('click', function(){
	borrar();
});
function borrar() {
	txt1.value=0;
	txt2.value=0;
	resultado.innerHTML=0;
}
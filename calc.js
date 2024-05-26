let firstNumber, secondNumber;

document.getElementById('num1').addEventListener('change', (e)=>{
	firstNumber=parseFloat(e.target.value);
});
document.getElementById('num2').addEventListener('change', (e)=>{
	secondNumber=parseFloat(e.target.value);
});
document.getElementById('add').addEventListener('click', ()=>{
	firstNumber=parseFloat(document.getElementById('num1').value);
	secondNumber=parseFloat(document.getElementById('num2').value);
	if (isNaN(firstNumber) || isNaN(secondNumber)) {
		alert('Make sure to type numbers');
		document.getElementById('answer').innerHTML='';
	}else{
		document.getElementById('answer').innerHTML=firstNumber+secondNumber;
	}
});
document.getElementById('substract').addEventListener('click', ()=>{
	firstNumber=parseFloat(document.getElementById('num1').value);
	secondNumber=parseFloat(document.getElementById('num2').value);
	if (isNaN(firstNumber) || isNaN(secondNumber)) {
		alert('Make sure to type numbers');
		document.getElementById('answer').innerHTML='';
	}else{
		document.getElementById('answer').innerHTML=firstNumber-secondNumber;
	}
});
document.getElementById('product').addEventListener('click', ()=>{
	firstNumber=parseFloat(document.getElementById('num1').value);
	secondNumber=parseFloat(document.getElementById('num2').value);
	if (isNaN(firstNumber) || isNaN(secondNumber)) {
		alert('Make sure to type numbers');
		document.getElementById('answer').innerHTML='';
	}else{
		document.getElementById('answer').innerHTML=firstNumber*secondNumber;
	}
});
document.getElementById('divide').addEventListener('click', ()=>{
	firstNumber=parseFloat(document.getElementById('num1').value);
	secondNumber=parseFloat(document.getElementById('num2').value);
	if (isNaN(firstNumber) || isNaN(secondNumber)) {
		alert('Make sure to type numbers');
		document.getElementById('answer').innerHTML='';
	}else{
		if (secondNumber===0) {
			alert('División por cero');
			document.getElementById('answer').innerHTML='';
		}else{
			document.getElementById('answer').innerHTML=firstNumber/secondNumber;
		}
	}
});
document.getElementById('power').addEventListener('click', ()=>{
	firstNumber=parseFloat(document.getElementById('num1').value);
	secondNumber=parseFloat(document.getElementById('num2').value);
	if (isNaN(firstNumber) || isNaN(secondNumber)) {
		alert('Make sure to type numbers');
		document.getElementById('answer').innerHTML='';
	}else{
		document.getElementById('answer').innerHTML=firstNumber**secondNumber;
	}
});
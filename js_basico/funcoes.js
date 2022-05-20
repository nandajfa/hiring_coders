
function soma(operadorA, operadorB){
	var resultadoC = operadorA + operadorB;
	return resultadoC;
}

function olaGama(nome){
	console.log('Olá Gama! Você é a ' + nome);
}

var resultadoSoma = soma(1, 2);
var resultadoNovoSoma = soma(3, 54);

console.log(resultadoSoma);
console.log(resultadoNovoSoma);

olaGama("nanda");
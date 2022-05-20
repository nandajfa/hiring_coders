//var numeroSorteado = 10;

//var tabuada = 7;

//for (var i = 0; i < 100; i++){
//	console.log("valor de tabuada" + tabuada + " x " + i + " = " + tabuada * i);
//}

//for (var i = 0; i < 100; i++){
//	if (numeroSorteado === i){
//		console.log("Seu número foi encontrado");
//	}
//}

var achou = false;
var numeroSorteado = 10;
var possivelValor = 0;

while (!achou){
	possivelValor += 1;
	if (numeroSorteado === possivelValor){
		achou = true;
	} else {
		console.log("Possível valor não corresponde ao numero" + possivelValor);
	}
}
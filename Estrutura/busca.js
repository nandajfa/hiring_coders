var valores = [5, 8, 10, 22, 38, 45, 60, 90, 100, 120];

function busca(num){
	for (i = 0; i < 6; i++){
		if (num == valores[i]){
			return i;
		}
	}
	return -1;
}

console.log(busca(10));
console.log(busca(50));

//Busca binaria - Dados ordenados//

function buscaBin(num){
	let inicio, fim;
	let meio;
	let passos = 0;
	inicio =0;
	fim = 9;
	while (inicio <= fim){
		meio = parseInt((inicio + fim) / 2);
		passos = passos + 1;
		if (num == valores[meio]){
			console.log("Achei em " + passos + " passos");
			return meio;
		} else {
			if (num > valores[meio]){
				inicio = meio + 1;
			} else {
				fim = meio -1;
			}
		}
	}
	console.log("não achei em " + passos + " passos");
	return -1;
}

console.log(buscaBin(10));
console.log(buscaBin(50));
console.log(buscaBin(60));
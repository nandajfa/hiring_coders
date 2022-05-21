function principal(){
	console.log('executando')
}
//sem 'return' já sabe que retorn void

principal()

//laços de repetição infinitos
// ou funções que disparam erros
function nuncaRetorna(): never{
	while(true){}
}

nuncaRetorna()

function nuncaRetornaErro(): never{
	throw new Error('Erro')
}

nuncaRetornaErro()
interface jogoAssertion {
	nome: string;
	descricao: string;
}

//let jogo = {} as jogoAssertion; ou
let jogo = <jogoAssertion>{}

jogo.nome = 'nome'
jogo.descricao = 'descricao'
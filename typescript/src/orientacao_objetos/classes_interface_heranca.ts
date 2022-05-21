//class Usuario {
//	public nome;
//	public idade;

//	constructor(nome: string, idade: number){
//		this.nome = nome;
///		this.idade = idade;
//	}
//}

//class player extends Usuario{
//	public jogo;

//	constructor(nome: string, idade: number, jogo:string){
//		super(nome, idade);

//		this.jogo = jogo;
//	}
//}

//const jogador = new player('Nando', 35, 'Mario');
//console.log(jogador)

//function Users(nome, idade){
//	this.nome = nome;
//	this.idade = idade;
//}

//const pessoas = new Users ('Nanda', 25)
//console.log(typeof Users)

//static

class Usuario {
	public nome;
	public idade;

	constructor(nome: string, idade: number){
		this.nome = nome;
		this.idade = idade;
	}
}

class player extends Usuario{
	public jogo;

	constructor(nome: string, idade: number, jogo:string){
		super(nome, idade);

		this.jogo = jogo;
	}

	dizerJogoAtual(){
		return `Estou jogando, no momento: ${this.jogo}`;
	}

	static queHoras(){
		return Date();
	}
}

const jogador = new player('Nando', 35, 'Mario');
console.log(jogador.dizerJogoAtual())
console.log(player.queHoras())

//private, protected, public

class Jogo {
	public nome;
//	private nome;

	constructor(nome: string){
		this.nome = nome;
	}

	dizerNome(){
//		return `O nome do jogo é ${this.nome}` ou
		return this.nome;
	}
}

//class jogo_descricao extends Jogo{
//	private descricao;

//	constructor(nome:string, descricao:string){
//		super(nome);

//		this.descricao = descricao;
//	}
//}

//const sims = new jogo_descricao ('The sims', 'ótimo jogo');
//console.log(sims.dizerNome());

//const sims = new Jogo ('The sims'); PRIVATE
//console.log(sims.dizerNome);
//console.log(sims.nome)

// public é acessível de forma geral, dentro e fora da classe.
// private: é acessível apenas dentro da classe onde o campo foi criado.
//protected: é acessível apenas dentro da classe(e subclasses) onde o campo foi criado.

//interfaces

interface IJogoComDescricao {
//	nome: string;
	descricao: string;
	dizerNomeComDescricao(): string;
}

//implements
class jogoComDescricao extends Jogo implements IJogoComDescricao {
	public descricao;

	constructor(nome:string, descricao:string){
		super(nome);

		this.descricao = descricao;
	}
	dizerNomeComDescricao(){
		return `O nome do jogo é ${this.nome}`
	}
}

const obj: IJogoComDescricao = {
	descricao: 'descricao do jogo',
	dizerNomeComDescricao(){
		return '123'
	}
}
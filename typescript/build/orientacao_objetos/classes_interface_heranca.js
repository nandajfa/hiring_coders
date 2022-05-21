"use strict";
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
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
class player extends Usuario {
    constructor(nome, idade, jogo) {
        super(nome, idade);
        this.jogo = jogo;
    }
    dizerJogoAtual() {
        return `Estou jogando, no momento: ${this.jogo}`;
    }
    static queHoras() {
        return Date();
    }
}
const jogador = new player('Nando', 35, 'Mario');
console.log(jogador.dizerJogoAtual());
console.log(player.queHoras());
//private, protected, public
class Jogo {
    //	private nome;
    constructor(nome) {
        this.nome = nome;
    }
    dizerNome() {
        //		return `O nome do jogo é ${this.nome}` ou
        return this.nome;
    }
}
//implements
class jogoComDescricao extends Jogo {
    constructor(nome, descricao) {
        super(nome);
        this.descricao = descricao;
    }
    dizerNomeComDescricao() {
        return `O nome do jogo é ${this.nome}`;
    }
}
const obj = {
    descricao: 'descricao do jogo',
    dizerNomeComDescricao() {
        return '123';
    }
};

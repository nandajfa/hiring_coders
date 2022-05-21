module.exports = class Cliente{
	constructor(_id=0, _nome="", _telefone=""){
		this.id = _id
		this.nome = _nome
		this.telefone = _telefone;
	}

		nomeUpercase(){
			return this.nome.toUpperCase()
		}

	 static primeiro(){
		return new Cliente()
	}

	static todos(){
		return [
			new Cliente(1, "Jess", "56565"),
			new Cliente(2, "Jess1", "456565"),
			new Cliente(3, "Jess2", "856565"),
			new Cliente(4, "Jess3", "656565"),
			new Cliente(5, "Jess4", "856565"),
			new Cliente(6, "Jess5", "756565"),
			new Cliente(7, "Jess6", "656565"),
			new Cliente(8, "Jess7", "256565"),
			new Cliente(9, "Jess8", "356565"),
			new Cliente(10, "Jess9", "756565"),
		]
	}
}
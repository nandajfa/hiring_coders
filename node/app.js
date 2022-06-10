// Incluindo uma biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');

// definindo de endereço/ URL
const hostname = '127.0.0.1'; //localhost/3000
const port = 3000;

// Implementação da regra de negócio
// createServer = cria um servidor, quando a pessoas acessar localhost executa o bloco de código abaixo
const server = http.createServer((req, res) => {

	var resposta;
	const urlparse = url.parse(req.url, true);
	// Receber informações usuario
	const params = queryString.parse(urlparse.search);

// Criar um usuário - Atualizar usuario
if (urlparse.pathname == '/criar') {

	// Salvar as informações - fs(npm) ou w3schools.com/nodejs -> file system
	fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params) , function (err) {
		if (err) throw err;
		console.log('Saved!');

		resposta = 'Usuario criado/atualizado com sucesso';

		res.statusCode = 200;
 		res.setHeader('Content-Type', 'text/plain');
 		res.end(resposta);
	  });
}
// Selecionar usuário
else if (urlparse.pathname == '/selecionar'){
	fs.readFile('users/' + params.id + '.txt', function(err, data) {
		resposta = data;

		res.statusCode = 200;
 		res.setHeader('Content-Type', 'application/json');
  		res.end(resposta);//envia o texto pro navegador imprimir na tela
	  });
}
// Remover usuário
else if (urlparse.pathname == '/remover'){
	fs.unlink('users/' + params.id + '.txt', function (err) {
		console.log('File deleted!');

		resposta = err ? "Usuario nao encontrado." :"Usuario removido.";

		res.statusCode = 200;
 		res.setHeader('Content-Type', 'text/plain');
  		res.end(resposta);
	  });
}

});

// Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// http://127.0.0.1:3000/criar?nome=jessica&idade=35&id=0
// http://127.0.0.1:3000/selecionar?id=0
// http://127.0.0.1:3000/remover?id=1
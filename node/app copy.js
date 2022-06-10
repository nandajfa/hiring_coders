// Incluindo uma biblioteca
const http = require('http');
const url = require('url');
const queryString = require('querys-tring');

// definindo de endereço/ URL
const hostname = '127.0.0.1'; //localhost/3000
const port = 3000;

// Implementação da regra de negócio
const server = http.createServer((req, res) => {
// createServer = cria um servidor, quando a pessoas acessar localhost executa o bloco de código abaixo

	// pegar a pergunta na url
	const params = queryString.parse(url.parse(req.url, true).search);
	console.log(params.pergunta);
	// verificar qual pergunta e escolher uma resposta

	let resposta;
	if (params.pergunta == 'melhor-filme'){
		resposta = 'star-wars';
	} else if (params.pergunta == 'melhor-serie')
	{
		resposta = 'node js';
	}
	else {
		console.log('Não sei');
	}
	// retornar a resposta escolhida

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(params.pergunta); //envia o texto pro navegador imprimir na tela
});

// Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
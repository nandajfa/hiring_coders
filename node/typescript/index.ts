import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse } from 'query-string';
import * as url from 'url';
import { writeFile } from 'fs';

const port = 5000;
const server = createServer((request: IncomingMessage, response: ServerResponse) => {

	const urlparse = url.parse(request.url ? request.url: '', true);

	var resposta;
	const params = parse(urlparse.search ? urlparse.search : '');

	if (urlparse.pathname == '/criar') {

		// Salvar as informações - fs(npm) ou w3schools.com/nodejs -> file system
		writeFile('users/' + params.id + '.txt', JSON.stringify(params) , function (err: any) {
			if (err) throw err;
			console.log('Saved!');

			resposta = 'Usuario criado/atualizado com sucesso';

			response.statusCode = 200;
			response.setHeader('Content-Type', 'text/plain');
			response.end(resposta);
		  });
	}

});

//execução
server.listen(port, () => {
	console.log(`Server running on port ${port}`);
})
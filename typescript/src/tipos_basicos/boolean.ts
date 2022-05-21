let estaAtivo: boolean;

estaAtivo = true;

function mapearStatusUsuario(status: boolean){
	if (status){
		return `Usuário está ativo`
	} else {
		return `Usuário NÂO está ativo`
	}
}

mapearStatusUsuario(true);
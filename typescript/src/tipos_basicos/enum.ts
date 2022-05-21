enum permissoes {
	admin,
	editor,
	comum
}

const usuario = {
	nivel: permissoes.editor
}

console.log(usuario)

enum permissoes_n {
	admin = 'ADMIN',
	editor = 'EDITOR',
	comum = 'COMUM'
}

const usuario_1 = {
	nivel: permissoes_n.editor
}

console.log(usuario_1)

enum cores {
	red = '#ff0000',
	black = '#000',
}

const usuario_2 = {
	perfil: cores.red,
	nivel: permissoes_n.admin
}

console.log(usuario_2)
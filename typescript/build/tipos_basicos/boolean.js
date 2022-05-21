"use strict";
let estaAtivo;
estaAtivo = true;
function mapearStatusUsuario(status) {
    if (status) {
        return `Usuário está ativo`;
    }
    else {
        return `Usuário NÂO está ativo`;
    }
}
mapearStatusUsuario(true);

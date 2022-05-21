"use strict";
function principal() {
    console.log('executando');
}
//sem 'return' já sabe que retorn void
principal();
//laços de repetição infinitos
// ou funções que disparam erros
function nuncaRetorna() {
    while (true) { }
}
nuncaRetorna();
function nuncaRetornaErro() {
    throw new Error('Erro');
}
nuncaRetornaErro();

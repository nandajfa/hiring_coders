"use strict";
var permissoes;
(function (permissoes) {
    permissoes[permissoes["admin"] = 0] = "admin";
    permissoes[permissoes["editor"] = 1] = "editor";
    permissoes[permissoes["comum"] = 2] = "comum";
})(permissoes || (permissoes = {}));
const usuario = {
    nivel: permissoes.editor
};
console.log(usuario);
var permissoes_n;
(function (permissoes_n) {
    permissoes_n["admin"] = "ADMIN";
    permissoes_n["editor"] = "EDITOR";
    permissoes_n["comum"] = "COMUM";
})(permissoes_n || (permissoes_n = {}));
const usuario_1 = {
    nivel: permissoes_n.editor
};
console.log(usuario_1);
var cores;
(function (cores) {
    cores["red"] = "#ff0000";
    cores["black"] = "#000";
})(cores || (cores = {}));
const usuario_2 = {
    perfil: cores.red,
    nivel: permissoes_n.admin
};
console.log(usuario_2);

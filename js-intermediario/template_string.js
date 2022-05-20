let nome = "Nanda";
let sobrenome = "Alves";
let profissao = "Artesã"

//sem template-string
console.log('Olá eu sou ' + nome + ' ' + sobrenome +
" minha profissão é: " + profissao )

//com template string
console.log(`Olá, meu nome é ${nome} ${sobrenome} e minha profissão é ${profissao}`)

console.log(`O resultado da soma de 1 + 1 = ${1 + 1}`)

console.log(`O objeto json ${{chave : 'valor'}}`)
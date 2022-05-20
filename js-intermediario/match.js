const cpf = 'Meu cpf é 456.565.565-45';

const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}'); //expressoes regulares

console.log(cpf.match(regex));
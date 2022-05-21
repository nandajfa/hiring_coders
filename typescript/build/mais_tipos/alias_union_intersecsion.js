"use strict";
//declaração de tipos, pode declarar tanto os campos quanto os tipos de campos
const nanda = {
    name: 'Nanda',
    lastName: 'Marques',
    dateOfbirth: '29/01/1996',
};
function logMessage(message, level) {
    console.log(`[${level}] - ${message}`);
}
logMessage('Uma msg info', 'error');
const userWithProfile = {
    name: 'nanda',
    lastName: 'marques',
    dateOfbirth: '10/10/10',
    bio: 'Olá, tudo bem?',
    interest: ['chocolate', 'dormir', 'fotografia']
};

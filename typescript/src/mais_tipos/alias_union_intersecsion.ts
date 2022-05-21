//declaração de tipos, pode declarar tanto os campos quanto os tipos de campos

type User = {
	name: string;
	lastName: string;
	dateOfbirth: string;
	age?: number;
}

const nanda: User = {
	name: 'Nanda',
	lastName: 'Marques',
	dateOfbirth: '29/01/1996',
}

//union types
// | (como se fosse o || ) serve para indicar que um parametro, um retorno
//vai ser de um tipo ou de outro

type LogLevel = 'info' | 'error' | 'debug';

function logMessage(message: string, level: LogLevel){
	console.log(`[${level}] - ${message}`)
}

logMessage('Uma msg info', 'error')

//intersection types: & (agrupar varios types alias)

type About = {
	bio: string;
	interest: string[]
}

type Profile = User & About;
const userWithProfile: Profile = {
	name: 'nanda',
	lastName: 'marques',
	dateOfbirth: '10/10/10',
	bio: 'Olá, tudo bem?',
	interest: ['chocolate', 'dormir', 'fotografia']
}

type ComposedProfile = User & {
	log: LogLevel;
}
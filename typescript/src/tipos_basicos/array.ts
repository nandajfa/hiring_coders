let gatos: string[] = [
	'lora',
	'logan',
	'farofa'
]

function exibeGatos(gatos: string[]){
	return `Os gatos são: ${gatos.join(', ')}`
}

console.log(exibeGatos(gatos));

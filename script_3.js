number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

function pyramide(nb) {

		let floor = '';
		for ( let space = count; space <=nb; space++) {
			floor += ' ';
		};
		for ( let wall = 1; wall <=count; wall++) {
			floor += '#';
		};
		console.log(floor)
	}


pyramide(number);
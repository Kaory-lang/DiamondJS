'use strict'

class Diamond{
	diamondStructure;
	letter;
	lines;

	constructor(letter, lines){
		this.letter = letter;
		this.lines = lines;
		this.constructDiamond(this.letter, this.lines);
	}
	
	constructDiamond(letter, lines, intSpaces = 0, extSpaces = lines -1){
	//	let extSpaces = lines - 1;
		this.diamondStructure = [];

		while(extSpaces !== -1){
			if(extSpaces === lines - 1){
				//console.log(' '.repeat(extSpaces) + letter);
				this.diamondStructure.push(' '.repeat(extSpaces) + letter);
				intSpaces += 1;
			}else{
				//console.log(' '.repeat(extSpaces) + letter + ' '.repeat(intSpaces) + letter);
				if(intSpaces < 0){
					this.diamondStructure.push(' '.repeat(extSpaces) + letter + ' '.repeat(0) + letter);
				}else{
					this.diamondStructure.push(' '.repeat(extSpaces) + letter + ' '.repeat(intSpaces) + letter);
				}
				intSpaces += 2;
			}
			extSpaces -= 1;
		}
	}

	show(){
		this.diamondStructure.forEach((line) => {console.log(line)});
		this.diamondStructure.reverse().forEach((line) => {console.log(line)});
	}
}

let a = new Diamond('a', 10);
//a.constructDiamond('a', 10, -20, 1);
a.show();

'use strict'

class Diamond{
	diamondStructure;
	letter;
	lines;
	animationPID;

	constructor(letter, lines){
		this.letter = letter;
		this.lines = lines;
		this.constructDiamond(this.letter, this.lines);
	}
	
	constructDiamond(letter, lines, intSpaces = 0){
		let extSpaces = lines - 1;
		this.diamondStructure = [];

		while(lines !== 0){ 	//Always first line
			if(extSpaces === this.lines - 1){
				this.diamondStructure.push(' '.repeat(extSpaces) + letter);
					
				intSpaces += 1;
				extSpaces -= 1;
				lines -= 1;
			}else{
				if(intSpaces <= 0){ 	//Other lines
					this.diamondStructure.push(' '.repeat(extSpaces+1) + letter);
					intSpaces += 1;
				}else{
					this.diamondStructure.push(' '.repeat(extSpaces) + letter + ' '.repeat(intSpaces) + letter);
					extSpaces -= 1;
					intSpaces += 2;
					}
				
				lines -= 1;
			}
		}
	}

	show(){
		this.diamondStructure.forEach((line) => {console.log(line)});
		this.diamondStructure.reverse().forEach((line) => {console.log(line)});
		this.diamondStructure.reverse();
	}

	startAnimation(){
		let intSpaces = 0;
		let direction = false; 		//False: Negative || True: Positive

		let animation = () => {
			this.show();
			this.constructDiamond(this.letter, this.lines, intSpaces);

			if(Math.abs(intSpaces) === this.lines-1) direction = true;
			else if(intSpaces === 0) direction = false;

			if(direction) intSpaces += 1;
			else intSpaces -= 1;

			setTimeout(console.clear, 250);
		}

		this.animationPID = setInterval(animation, 500);
	}

	stopAnimation(){
		clearInterval(this.animationPID);
	}
}

let a = new Diamond('a', 10);
a.startAnimation();

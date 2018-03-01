const { spawn } = require('child_process');
const fs = require('fs');

const arithmetics = require('./data/arithmetic').arithmetics;
const identifiers = require('./data/identifier').identifiers;
const keywords = require('./data/keyword').keywords;
const logicals = require('./data/logical').logicals;
const numlits = require('./data/numlit').numlits;
const others = require('./data/other').others;
const predicates = require('./data/predicate').predicates;

const data = [arithmetics, identifiers, keywords, logicals, numlits, others, predicates];
const linecount = process.argv[3];
const linelength = process.argv[4];
let output = "";
const inputfile = "temp.ss";
const executable = process.argv[2];



for (let linenum = 0; linenum < linecount; linenum++) {
	let previoustype = -1;
	let previoustoken = -1;
	for (let tokennum = 0; tokennum < linelength; tokennum++) {

		let typeselector = Math.floor(Math.random() * data.length);
		while (typeselector === previoustype) {
			typeselector = Math.floor(Math.random() * data.length);
		}

		let tokenselector = Math.floor(Math.random() * data[typeselector].length);
		while (tokenselector === previoustoken) {
			tokenselector = Math.floor(Math.random() * data[typeselector].length);
		} 

		previoustype = typeselector;
		previoustoken = tokenselector;

		output += data[typeselector][tokenselector];
	}
	output += "\n";
}

// Write to a temp file
fs.writeFileSync(inputfile, output); 

const testRun = spawn(executable, [inputfile]);

testRun.stdout.on('data', (data) => {
	console.log(`stdout: ${data}`);
});

testRun.stderr.on('data', (data) => {
	console.log(`stderr: ${data}`);
});

testRun.on('close', (code) => {
	console.log(`child process exited with code ${code}`);
	fs.unlinkSync(inputfile);
});
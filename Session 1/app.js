/*
const myAddMod = require('./add');

const addFn = myAddMod.add;
const subFn = myMod.sub;

logFn("logger");
logFn(addFn(1,2));
logFn(subFn(3,1));

logFn(myMod);*/

const myMod = require('./logger');
const logFn = myMod.logger;
const fs = require('fs');

f = fs.readFileSync('./file.txt', 'utf8');

console.log(f);

fs.readFile('./logger.js', 'utf8', function(err, file){
	console.log(file);
})
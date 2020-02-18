function logger(log){
	console.log("log me: ", log);
}

function sub(num1, num2){
	return num1-num2;
}

module.exports = {
	logger: logger,
	sub: sub
}
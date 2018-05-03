const fs = require("fs");

function done(output){
	process.stdout.write(output);
	process.stdout.write('\nprompt > ');
}

function evaluateCmd(userInput){
	const userInputArray = userInput.split(" ");
	const command = userInputArray[0];

	switch(command){
		case "echo":
		commandLibrary.echo(userInputArray.slice(1).join(" "));
		break;
		case "cat":
		commandLibrary.cat(userInputArray.slice(1));
		break;
		case "head":
		commandLibrary.head(userInputArray.slice(1));
		break;
		case "tail":
		commandLibrary.tail(userInputArray.slice(1));
		default: 
		console.log("Not a valid input ");
		done(userInput);

	}
}

const commandLibrary = {
	"echo": function(userInput){
		done(userInput);
	},
	"cat": function(fullPath){
		const fileName = fullPath[0];
		fs.readFile(fileName, (err,data)=>{
			if(err) throw err;
			done(data);
		});
	},
	"head": function(fullPath){
		const fileName = fullPath[0];
		fs.readFile(fileName, (err,data)=>{
			if(err) throw err;
			done(data.slice(0,200));
    	});	
	},
	"tail": function(fullPath){
		const fileName = fullPath[0];
		fs.readFile(fileName, (err,data)=>{
			if(err) throw err;
			var length = Math.floor(data.length/2+data.length/4);
			done(data.slice(length,data.length));
		});
	}
}

module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;
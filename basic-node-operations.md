# Run the commands sort, wc and uniq on the commands.js file. Explain how they work and what the output was.
* sort produces output that is sorted alphabetically by line. This means that items that are at the same line indentation are grouped together and sorted by the starting letter alphebetical order.

```

			done(data);
			if(err) throw err;
		break;
		break;
		case "cat":
		case "echo":
		commandLibrary.cat(userInputArray.slice(1));
		commandLibrary.echo(userInputArray.slice(1).join(" "));
		const fileName = fullPath[0];
		done(userInput);
		fs.readFile(fileName, (err,data)=>{
		});
	"cat": function(fullPath){
	"echo": function(userInput){
	const command = userInputArray[0];
	const userInputArray = userInput.split(" ");
	process.stdout.write('\nprompt > ');
	process.stdout.write(output);
	switch(command){
	}
	}
	},

```

* wc produces output that gives insight to number of newlines, total word count and byte count for the file in question. 

```
  35      63     729 commands.js
```

* uniq produces output that shows each line sorted and displayed based on any lines not being the same. Only strictly different lines are returned to screen output. If a line in file is the same as the line above it, uniq will removes this line from the output.

```
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
	}
};

module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;

```

# Using the pipe (|) connect at least two commands and run it on commands.js. Explain what the output was and why the specific data was outputted.

* uniq  commands.js | wc - these commands look to return only different lines from the command.js file. Since all the lines are different and no exactly the same lines exist in the file the output is passed to wc to see that there are still 35 lines, 63 words, and 729 bytes in the file. Thus, we can compare this to wc of just command.js to see this document has no repeat sentences/lines. 

```
  35      63     729
```

```
function reverseString(inputString) {
 var arr = inputString.split(' ');
 var arrPush = [];
 arr.forEach((el)=>{
 	var word;
 	word = el.split('').reverse().join('');
 	arrPush.push(word);
 })
return arrPush.join(' ');
}
```



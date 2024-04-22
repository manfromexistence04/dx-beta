# cli-test

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.4. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.


```
                             
                              

// // index.js
// const { Command } = require("commander");

// // creating a command instance
// const program = new Command();

// // creating tool
// program
//   .name("Math-util")
//   .description("A CLI tool for performing simple math functions")
//   .version("1.0.0");

// // adding command
// program
//   .command("add")
//   .description("Add two numbers")
//   .argument("<firstNumber>", "first number")
//   .argument("<secondNumber>", "second number")
//   .action((a: string, b: string) => {
//     console.log(parseInt(a) + parseInt(b));
//   });

// program.parse();






// // index.js
// import inquirer from "inquirer";

// inquirer
//   .prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "What is your name?",
//     },
//   ])
//   .then((answers) => {
//     console.log(`Hello ${answers.name}`);
//   })




// import chalk from "chalk";

// console.log(chalk.blue("Hello world!"));
// console.log(chalk.red.bold("Warning"));
// console.log(chalk.white.italic("success"));

// console.log(
//   chalk.yellow.bgBlue("This text has a yellow foreground and blue background")
// );





// const Spinner = require("cli-spinner").Spinner;

// const spinner = new Spinner("processing... %s");
// spinner.setSpinnerString("|/-\\\\");
// spinner.start();

// setTimeout(() => {
//   spinner.text = "Task completed.";

//   setTimeout(() => {
//     spinner.stop();
//   }, 500);
// }, 5000);






// const figlet = require("figlet");

// figlet("Hello World!!", (err: any, data: any) => {
//   if (err) {
//     console.log("Sorry, something went wrong");
//     console.dir(err);
//     return;
//   }

//   console.log(data);
// });









// await $`cat package.json | grep name`

// let branch = await $`git branch --show-current`
// await $`dep deploy --branch=${branch}`

// await Promise.all([
//   $`sleep 1; echo 1`,
//   $`sleep 2; echo 2`,
//   $`sleep 3; echo 3`,
// ])

// let name = 'foo bar'
// await $`mkdir /tmp/${name}`





// var blessed = require('blessed')
// , contrib = require('blessed-contrib')
// , screen = blessed.screen()
// , line = contrib.line(
//     { style:
//       { line: "yellow"
//       , text: "green"
//       , baseline: "black"}
//     , xLabelPadding: 3
//     , xPadding: 5
//     , label: 'Title'})
// , data = {
//     x: ['t1', 't2', 't3', 't4'],
//     y: [5, 1, 7, 5]
//  }
// screen.append(line) //must append before setting data
// line.setData([data])

// screen.key(['escape', 'q', 'C-c'], function(ch: any, key: any) {
// return process.exit(0);
// });

// screen.render()




// require('yargs')
//   .scriptName("pirate-parser")
//   .usage('$0 <cmd> [args]')
//   .command('hello [name]', 'welcome ter yargs!', (yargs: { positional: (arg0: string, arg1: { type: string; default: string; describe: string }) => void }) => {
//     yargs.positional('name', {
//       type: 'string',
//       default: 'Cambi',
//       describe: 'the name to say hello to'
//     })
//   }, function (argv: { name: any }) {
//     console.log('hello', argv.name, 'welcome to yargs!')
//   })
//   .help()
//   .argv






// import {Command} from '@oclif/core'

// export class HelloCommand extends Command {
//   public static enableJsonFlag = true
//   public async run(): Promise<{ message: string }> {
//     this.log('hello, world!')
//     return { message: 'hello, world!' }
//   }
// }









// const prompts = require('prompts');

// (async () => {
//   const response = await prompts({
//     type: 'autocomplete',
//     name: 'value',
//     message: 'Pick your favorite actor',
//     choices: [
//       { title: 'Cage' },
//       { title: 'Clooney', value: 'silver-fox' },
//       { title: 'Gyllenhaal' },
//       { title: 'Gibson' },
//       { title: 'Grant' }
//     ]
//   });

//   console.log(response); // => { value: 24 }
// })();










// const { MultiSelect } = require('enquirer');

// const prompt = new MultiSelect({
//   name: 'value',
//   message: 'Pick your favorite colors',
//   limit: 7,
//   choices: [
//     { name: 'aqua', value: '#00ffff' },
//     { name: 'black', value: '#000000' },
//     { name: 'blue', value: '#0000ff' },
//     { name: 'fuchsia', value: '#ff00ff' },
//     { name: 'gray', value: '#808080' },
//     { name: 'green', value: '#008000' },
//     { name: 'lime', value: '#00ff00' },
//     { name: 'maroon', value: '#800000' },
//     { name: 'navy', value: '#000080' },
//     { name: 'olive', value: '#808000' },
//     { name: 'purple', value: '#800080' },
//     { name: 'red', value: '#ff0000' },
//     { name: 'silver', value: '#c0c0c0' },
//     { name: 'teal', value: '#008080' },
//     { name: 'white', value: '#ffffff' },
//     { name: 'yellow', value: '#ffff00' }
//   ]
// });

// prompt.run()
//   .then((answer: any) => console.log('Answer:', answer))
//   .catch(console.error);










// const prompts = require('prompts');
// import prompts from "prompts";

// (async () => {
//     const response = await prompts({
//         type: 'multiselect',
//         name: 'value',
//         message: 'Pick colors',
//         choices: [
//             { title: 'shadcnui', value: '#ff0000', selected: true },
//             { title: 'accertinityui', value: '#0000ff', selected: true  },
//             { title: 'materialui', value: '#0000ff' },
//             { title: 'nextui', value: '#0000ff' },
//             { title: 'bootstrapui', value: '#0000ff' },
//             { title: 'chakraui', value: '#0000ff' },
//             { title: 'fluentui', value: '#0000ff' },
//             { title: 'headlessui', value: '#0000ff' },
//             { title: 'mantineui', value: '#0000ff' },
//             { title: 'semanticui', value: '#0000ff' },
//         ],
//         max: 2,
//         hint: '- Space to select. Return to submit'
//     });

//     console.log(response); // => { value: 24 }
// })();




// */                          
 
// var blessed = require('blessed');

// // Create a screen object.
// var screen = blessed.screen({
//   smartCSR: true
// });

// screen.title = 'my window title';

// // Create a box perfectly centered horizontally and vertically.
// var box = blessed.box({
//   top: 'center',
//   left: 'center',
//   width: '50%',
//   height: '50%',
//   content: 'Hello {bold}world{/bold}!',
//   tags: true,
//   border: {
//     type: 'line'
//   },
//   style: {
//     fg: 'white',
//     bg: 'magenta',
//     border: {
//       fg: '#f0f0f0'
//     },
//     hover: {
//       bg: 'green'
//     }
//   }
// });

// // Append our box to the screen.
// screen.append(box);

// // Add a png icon to the box
// var icon = blessed.image({
//   parent: box,
//   top: 0,
//   left: 0,
//   type: 'overlay',
//   width: 'shrink',
//   height: 'shrink',
//   file: __dirname + '/my-program-icon.png',
//   search: false
// });

// // If our box is clicked, change the content.
// box.on('click', function(data) {
//   box.setContent('{center}Some different {red-fg}content{/red-fg}.{/center}');
//   screen.render();
// });

// // If box is focused, handle `enter`/`return` and give us some more content.
// box.key('enter', function(ch, key) {
//   box.setContent('{right}Even different {black-fg}content{/black-fg}.{/right}\n');
//   box.setLine(1, 'bar');
//   box.insertLine(1, 'foo');
//   screen.render();
// });

// // Quit on Escape, q, or Control-C.
// screen.key(['escape', 'q', 'C-c'], function(ch, key) {
//   return process.exit(0);
// });

// // Focus our element.
// box.focus();

// // Render the screen.
// screen.render();

// const vorpal = require('vorpal')();

// vorpal
//   .command('foo', 'Outputs "bar".')
//   .action(function(args, callback) {
//     // @ts-ignore
//     this.log('bar');
//     callback();
//   });

//   vorpal.ui.delimiter('NaN: ');
//   setInterval(function() {
//     vorpal.ui.delimiter(vorpal.ui.delimiter() + 'NaN: ');
//   }, 1000);
// import figures, {mainSymbols, fallbackSymbols, replaceSymbols} from 'figures';

// console.log(figures.tick);
// // On terminals with Unicode symbols:  ✔
// // On other terminals:                 √

// console.log(mainSymbols.tick);
// // On all terminals:  ✔

// console.log(fallbackSymbols.tick);
// // On all terminals:  √

// console.log(replaceSymbols('✔ check'));
// // On terminals with Unicode symbols:  ✔ check
// // On other terminals:                 √ check
// import logSymbols from 'log-symbols';

// console.log(logSymbols.warning, 'Finished successfully!');
// // Terminals with Unicode support:     ✔ Finished successfully!
// // Terminals without Unicode support:  √ Finished successfully!
// import updateNotifier from 'update-notifier';
// import packageJson from '../package.json' assert {type: 'json'};

// updateNotifier({pkg: packageJson}).notify();
// import meow from 'meow';
// // import foo from './lib/index.js';

// const cli = meow(`
// 	Usage
// 	  $ foo <input>

// 	Options
// 	  --rainbow, -r  Include a rainbow

// 	Examples
// 	  $ foo unicorns --rainbow
// 	  🌈 unicorns 🌈
// `, {
// 	importMeta: import.meta, // This is required
// 	flags: {
// 		rainbow: {
// 			type: 'boolean',
// 			shortFlag: 'r'
// 		}
// 	}
// });
// /*

// foo(cli.input.at(0), cli.flags);
// import meow from 'meow';

// const cli = meow(`
// 	Usage
// 	  $ foo

// 	Options
// 	  --rainbow, -r  Include a rainbow
// 	  --unicorn, -u  Include a unicorn
// 	  --no-sparkles  Exclude sparkles

// 	Examples
// 	  $ foo
// 	  🌈 unicorns✨🌈
// `, {
// 	importMeta: import.meta,
// 	booleanDefault: undefined,
// 	flags: {
// 		rainbow: {
// 			type: 'boolean',
// 			default: true,
// 			shortFlag: 'r'
// 		},
// 		unicorn: {
// 			type: 'boolean',
// 			default: false,
// 			shortFlag: 'u'
// 		},
// 		cake: {
// 			type: 'boolean',
// 			shortFlag: 'c'
// 		},
// 		sparkles: {
// 			type: 'boolean',
// 			default: true
// 		}
// 	}
// });

// const wifiPassword = require('wifi-password');

// wifiPassword().then(password => {
// 	console.log(password);
// 	//=> 'johndoesecretpassword'
// });


/*
/$$$$$$$$ /$$$$$$ / $$$$$$$ / $$$$$$$$ / $$$$$$ / $$ / $$ / $$$$$$ / $$$$$$$ / $$
| $$_____/|_  $$_/| $$__  $$| $$_____/ /$$__  $$| $$  | $$|_  $$_/| $$__  $$|__/
| $$        | $$  | $$  \ $$| $$      | $$  \__/| $$  | $$  | $$  | $$  \ $$ /$$  /$$$$$$
| $$$$$     | $$  | $$$$$$$/| $$$$$   |  $$$$$$ | $$$$$$$$  | $$  | $$$$$$$/| $$ /$$__  $$
| $$__/     | $$  | $$__  $$| $$__/    \____  $$| $$__  $$  | $$  | $$____/ | $$| $$  \ $$
| $$        | $$  | $$  \ $$| $$       /$$  \ $$| $$  | $$  | $$  | $$      | $$| $$  | $$
| $$       /$$$$$$| $$  | $$| $$$$$$$$|  $$$$$$/| $$  | $$ /$$$$$$| $$ /$$  | $$|  $$$$$$/
|__/      |______/|__/  |__/|________/ \______/ |__/  |__/|______/|__/|__/  |__/ \______/
*/




// let playerName:any;

// const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

// async function welcome() {
//   // const rainbowTitle = chalkAnimation.rainbow(
//   //   'Dx Ui - Is a cli app to quickly add your favorite components from your favorite ui frameworks.\n'
//   // );

//   await sleep();
//   // rainbowTitle.stop();

//   console.log(`
//     ${chalk.bgBlue('HOW TO PLAY')} 
//     I am a process on your computer.
//     If you get any question wrong I will be ${chalk.bgRed('killed')}
//     So get all the questions right...

//   `);
// }

// async function handleAnswer(isCorrect: boolean) {
//   const spinner = createSpinner('Checking answer...').start();
//   await sleep();

//   if (isCorrect) {
//     spinner.success({ text: `Nice work ${playerName}. That's a legit answer` });
//   } else {
//     spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
//     process.exit(1);
//   }
// }

// async function askName() {
//   const answers = await inquirer.prompt({
//     name: 'player_name',
//     type: 'input',
//     message: 'What is your name?',
//     default() {
//       return 'Player';
//     },
//   });

//   playerName = answers.player_name;
// }

// function winner() {
//   console.clear();
//   figlet(`Congrats , ${playerName} !\n $ 1 , 0 0 0 , 0 0 0`, (err, data) => {
//     console.log(gradient.pastel.multiline(data) + '\n');

//     console.log(
//       chalk.green(
//         `Programming isn't about what you know; it's about making the command line look cool`
//       )
//     );
//     process.exit(0);
//   });
// }

// async function question1() {
//   const answers = await inquirer.prompt({
//     name: 'question_1',
//     type: 'list',
//     message: 'JavaScript was created in 10 days then released on\n',
//     choices: [
//       'May 23rd, 1995',
//       'Nov 24th, 1995',
//       'Dec 4th, 1995',
//       'Dec 17, 1996',
//     ],
//   });

//   return handleAnswer(answers.question_1 === 'Dec 4th, 1995');
// }

// async function question2() {
//   const answers = await inquirer.prompt({
//     name: 'question_2',
//     type: 'list',
//     message: 'What is x? var x = 1_1 + "1" + Number(1)\n',
//     choices: ['4', '"4"', '"1111"', '69420'],
//   });
//   return handleAnswer(answers.question_2 === '"1111"');
// }

// async function question3() {
//   const answers = await inquirer.prompt({
//     name: 'question_3',
//     type: 'list',
//     message: `What is the first element in the array? ['🐏', '🦙', '🐍'].length = 0\n`,
//     choices: ['0', '🐏', '🐍', 'undefined'],
//   });

//   return handleAnswer(answers.question_3 === 'undefined');
// }

// async function question4() {
//   const answers = await inquirer.prompt({
//     name: 'question_4',
//     type: 'list',
//     message: 'Which of the following is NOT a primitive type?\n',
//     choices: [
//       'boolean',
//       'number',
//       'null',
//       'object', // Correct
//     ],
//   });
//   return handleAnswer(answers.question_4 === 'object');
// }

// async function question5() {
//   const answers = await inquirer.prompt({
//     name: 'question_5',
//     type: 'list',
//     message:
//       'JS is a high-level single-threaded, garbage-collected,\n' +
//       'interpreted(or just-in-time compiled), prototype-based,\n' +
//       'multi-paradigm, dynamic language with a ____ event loop\n',
//     choices: ['multi-threaded', 'non-blocking', 'synchronous', 'promise-based'],
//   });

//   return handleAnswer(answers.question_5 === 'non-blocking');
// }

// // Run it with top-level await
// console.clear();
// await welcome();
// await askName();
// await question1();
// await question2();
// await question3();
// await question4();
// await question5();
// winner();

/*
________                  __ 
/        |                /  |
$$$$$$$$/  _______    ____$$ |
$$ |__    /       \  /    $$ |
$$    |   $$$$$$$  |/$$$$$$$ |
$$$$$/    $$ |  $$ |$$ |  $$ |
$$ |_____ $$ |  $$ |$$ \__$$ |
$$       |$$ |  $$ |$$    $$ |
$$$$$$$$/ $$/   $$/  $$$$$$$/ 

// */


        // console.log(`${chalk.gray("This innovative solution empowers developers by automating the often-tedious process of integrating UI components.\nEliminate the need for manual configuration and repetitive tasks, and unlock a new level of development efficiency.\nTo maintain your current session and avoid interruption, please execute any command within the next 10s")}`)

```
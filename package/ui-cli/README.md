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




```
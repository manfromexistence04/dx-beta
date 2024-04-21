#!/usr/bin/env node

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




// /*
// /$$$$$$$$ /$$$$$$ / $$$$$$$ / $$$$$$$$ / $$$$$$ / $$ / $$ / $$$$$$ / $$$$$$$ / $$
// | $$_____/|_  $$_/| $$__  $$| $$_____/ /$$__  $$| $$  | $$|_  $$_/| $$__  $$|__/
// | $$        | $$  | $$  \ $$| $$      | $$  \__/| $$  | $$  | $$  | $$  \ $$ /$$  /$$$$$$
// | $$$$$     | $$  | $$$$$$$/| $$$$$   |  $$$$$$ | $$$$$$$$  | $$  | $$$$$$$/| $$ /$$__  $$
// | $$__/     | $$  | $$__  $$| $$__/    \____  $$| $$__  $$  | $$  | $$____/ | $$| $$  \ $$
// | $$        | $$  | $$  \ $$| $$       /$$  \ $$| $$  | $$  | $$  | $$      | $$| $$  | $$
// | $$       /$$$$$$| $$  | $$| $$$$$$$$|  $$$$$$/| $$  | $$ /$$$$$$| $$ /$$  | $$|  $$$$$$/
// |__/      |______/|__/  |__/|________/ \______/ |__/  |__/|______/|__/|__/  |__/ \______/
// */


// import chalk from 'chalk';
// import inquirer from 'inquirer';
// import gradient from 'gradient-string';
// import chalkAnimation from 'chalk-animation';
// import figlet from 'figlet';
// import { createSpinner } from 'nanospinner';

// let playerName:any;

// const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

// async function welcome() {
//   const rainbowTitle = chalkAnimation.rainbow(
//     'Dx Ui - Is a cli app to quickly add your favorite components from your favorite ui frameworks.\n'
//   );

//   await sleep();
//   rainbowTitle.stop();

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


// Nextui
import type {CommandName} from '@helpers/type';

import chalk from 'chalk';
import {Command} from 'commander';
import chalkAnimation from 'chalk-animation';

import {exec} from '@helpers/exec';
import {Logger, gradientString} from '@helpers/logger';
import {findMostMatchText} from '@helpers/math-diff';
import {outputBox} from '@helpers/output-info';
import {getCommandDescAndLog} from '@helpers/utils';

import pkg from '../package.json';

import {addAction} from './actions/add-action';
import {doctorAction} from './actions/doctor-action';
import {envAction} from './actions/env-action';
import {initAction} from './actions/init-action';
import {listAction} from './actions/list-action';
import {removeAction} from './actions/remove-action';
import {upgradeAction} from './actions/upgrade-action';
import {initStoreComponentsData} from './constants/component';
import {getStore, store} from './constants/store';
import {compareVersions, getComponents} from './scripts/helpers';

const commandList: CommandName[] = ['add', 'env', 'init', 'list', 'upgrade', 'doctor', 'remove'];

const ui = new Command();

ui
  .name('ui')
  .usage('[command]')
  // .description(`${chalk.blue(getCommandDescAndLog(`\nDx/Ui CLI v${pkg.version}\n`, ''))}`)
  .description(`${chalkAnimation.rainbow(
    'Dx Ui - Is a cli app to quickly add your favorite components from your favorite ui frameworks.\n'
     )}`)
  .version(pkg.version, '-v, --version', 'Output the current version')
  .helpOption('-h, --help', 'Display help for command')
  .allowUnknownOption()
  .action(async (_, command) => {
    let isArgs = false;

    if (command) {
      const args = command.args?.[0];

      if (args && !commandList.includes(args as CommandName)) {
        isArgs = true;

        const matchCommand = findMostMatchText(commandList, args);

        if (matchCommand) {
          Logger.error(
            `Unknown command '${args}', Did you mean '${chalk.underline(matchCommand)}'?`
          );
        } else {
          Logger.error(`Unknown command '${args}'`);
        }
      }
    }

    if (!isArgs) {
      const helpInfo = (await exec('ui --help', {logCmd: false, stdio: 'pipe'})) as string;

      let helpInfoArr = helpInfo.split('\n');

      helpInfoArr = helpInfoArr.filter((info) => info && !info.includes('NextUI CLI v'));
      // Add command name color
      helpInfoArr = helpInfoArr.map((info) => {
        const command = info.match(/(\w+)\s\[/)?.[1];

        if (command) {
          return info.replace(command, chalk.cyan(command));
        }

        return info;
      });

      Logger.log(helpInfoArr.join('\n'));
    }
    process.exit(0);
  });

ui
  .command('init')
  .description('Initializes a new project')
  .argument('[projectName]', 'Name of the project to initialize')
  .option('-t --template [string]', 'Specify a template for the new project, e.g., app, pages')
  /** ======================== TODO:(winches)Temporary use npm with default value ======================== */
  // .option('-p --package [string]', 'The package manager to use for the new project')
  .action(initAction);

ui
  .command('add')
  .description('Adds components to your project')
  .argument('[components...]', 'Names of components to add')
  .option('-a --all [boolean]', 'Add all components', false)
  .option('-p --packagePath [string]', 'Specify the path to the package.json file')
  .option('-tw --tailwindPath [string]', 'Specify the path to the tailwind.config.js file')
  .option('-app --appPath [string]', 'Specify the path to the App.tsx file')
  .option('--prettier [boolean]', 'Apply Prettier formatting to the added content', false)
  .option('--addApp [boolean]', 'Include App.tsx file content that requires a provider', false)
  .action(addAction);

ui
  .command('upgrade')
  .description('Upgrades project components to the latest versions')
  .argument('[components...]', 'Names of components to upgrade')
  .option('-p --packagePath [string]', 'Specify the path to the package.json file')
  .option('-a --all [boolean]', 'Upgrade all components', false)
  .action(upgradeAction);

ui
  .command('remove')
  .description('Removes components from the project')
  .argument('[components...]', 'Names of components to remove')
  .option('-p --packagePath [string]', 'Specify the path to the package.json file')
  .option('-a --all [boolean]', 'Remove all components', false)
  .option('-tw --tailwindPath [string]', 'Specify the path to the tailwind.config.js file')
  .action(removeAction);

ui
  .command('list')
  .description('Lists all components, showing status, descriptions, and versions')
  .option('-p --packagePath [string]', 'Specify the path to the package.json file')
  .option('-r --remote', 'List all components available remotely')
  .action(listAction);
ui
  .command('env')
  .description('Displays debugging information for the local environment')
  .option('-p --packagePath [string]', 'Specify the path to the package.json file')
  .action(envAction);

ui
  .command('doctor')
  .description('Checks for issues in the project')
  .option('-p --packagePath [string]', 'Specify the path to the package.json file')
  .option('-tw --tailwindPath [string]', 'Specify the path to the tailwind.config.js file')
  .option('-app --appPath [string]', 'Specify the path to the App.tsx file')
  .option('-ca --checkApp [boolean]', 'Check the App.tsx file', false)
  .option('-ct --checkTailwind [boolean]', 'Check the tailwind.config.js file', true)
  .option('-cp --checkPnpm [boolean]', 'Check for Pnpm', true)
  .action(doctorAction);

ui.hook('preAction', async (command) => {
  const args = command.args?.[0];

  if (args && commandList.includes(args as CommandName)) {
    // Before run the command init the components.json
    const nextUIComponents = (await getComponents()).components;

    initStoreComponentsData(nextUIComponents);
  }

  const cliLatestVersion = await getStore('cliLatestVersion');
  const latestVersion = await getStore('latestVersion');

  // Init latest version
  store.latestVersion = latestVersion;
  store.cliLatestVersion = cliLatestVersion;

  // Add NextUI CLI version check preAction
  const currentVersion = pkg.version;

  if (compareVersions(currentVersion, cliLatestVersion) === -1) {
    outputBox({
      color: 'yellow',
      padding: 1,
      text: `${chalk.gray(
        `Available upgrade: v${currentVersion} -> ${chalk.greenBright(
          `v${cliLatestVersion}`
        )}\nRun \`${chalk.cyan(
          'npm install ui-cli@latest'
        )}\` to upgrade\nChangelog: ${chalk.underline(
          'https://github.com/ui-org/ui-cli/releases'
        )}`
      )}`,
      title: gradientString('NextUI CLI')
    });
    Logger.newLine();
  }
});

ui.parseAsync(process.argv).catch(async (reason) => {
  Logger.newLine();
  Logger.error('Unexpected error. Please report it as a bug:');
  Logger.log(reason);
  Logger.newLine();
  process.exit(1);
});

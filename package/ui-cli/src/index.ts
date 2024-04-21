// #!/usr/bin/env node
// import type {CommandName} from '@helpers/type';

// import chalk from 'chalk';
// import {Command} from 'commander';

// import {exec} from '@helpers/exec';
// import {Logger, gradientString} from '@helpers/logger';
// import {findMostMatchText} from '@helpers/math-diff';
// import {outputBox} from '@helpers/output-info';
// import {getCommandDescAndLog} from '@helpers/utils';
// import chalkAnimation from 'chalk-animation';

// import pkg from '../package.json';

// import {addAction} from './actions/add-action';
// import {doctorAction} from './actions/doctor-action';
// import {envAction} from './actions/env-action';
// import {initAction} from './actions/init-action';
// import {listAction} from './actions/list-action';
// import {removeAction} from './actions/remove-action';
// import {upgradeAction} from './actions/upgrade-action';
// import {initStoreComponentsData} from './constants/component';
// import {getStore, store} from './constants/store';
// import {compareVersions, getComponents} from './scripts/helpers';

// import inquirer from 'inquirer';
// import gradient from 'gradient-string';
// import figlet from 'figlet';
// import { createSpinner } from 'nanospinner';

// /*
// $$\   $$\                       $$\               $$\ 
// $$$\  $$ |                      $$ |              \__|
// $$$$\ $$ | $$$$$$\  $$\   $$\ $$$$$$\   $$\   $$\ $$\ 
// $$ $$\$$ |$$  __$$\ \$$\ $$  |\_$$  _|  $$ |  $$ |$$ |
// $$ \$$$$ |$$$$$$$$ | \$$$$  /   $$ |    $$ |  $$ |$$ |
// $$ |\$$$ |$$   ____| $$  $$<    $$ |$$\ $$ |  $$ |$$ |
// $$ | \$$ |\$$$$$$$\ $$  /\$$\   \$$$$  |\$$$$$$  |$$ |
// \__|  \__| \_______|\__/  \__|   \____/  \______/ \__|
// */

// const commandList: CommandName[] = ['add', 'env', 'init', 'list', 'upgrade', 'doctor', 'remove'];

// const nextui = new Command();

// nextui
//   .name('nextui')
//   .usage('[command]')
//   .description(`${chalkAnimation.rainbow(
//         'Streamline UI Development with a CLI Tool for Efficient Component Integration'
//      )}`)
//   .version(pkg.version, '-v, --version', 'Output the current version')
//   .helpOption('-h, --help', 'Display help for command')
//   .allowUnknownOption()
//   .action(async (_, command) => {
//     let isArgs = false;

//     if (command) {
//       const args = command.args?.[0];

//       if (args && !commandList.includes(args as CommandName)) {
//         isArgs = true;

//         const matchCommand = findMostMatchText(commandList, args);

//         if (matchCommand) {
//           Logger.error(
//             `Unknown command '${args}', Did you mean '${chalk.underline(matchCommand)}'?`
//           );
//         } else {
//           Logger.error(`Unknown command '${args}'`);
//         }
//       }
//     }

//     if (!isArgs) {
//       const helpInfo = (await exec('nextui --help', {logCmd: false, stdio: 'pipe'})) as string;

//       let helpInfoArr = helpInfo.split('\n');

//       helpInfoArr = helpInfoArr.filter((info) => info && !info.includes('NextUI CLI v'));
//       // Add command name color
//       helpInfoArr = helpInfoArr.map((info) => {
//         const command = info.match(/(\w+)\s\[/)?.[1];

//         if (command) {
//           return info.replace(command, chalk.cyan(command));
//         }

//         return info;
//       });

//       Logger.log(helpInfoArr.join('\n'));
//     }
//     // process.exit(0);
//   });

// nextui
//   .command('init')
//   .description('Initializes a new project')
//   .argument('[projectName]', 'Name of the project to initialize')
//   .option('-t --template [string]', 'Specify a template for the new project, e.g., app, pages')
//   /** ======================== TODO:(winches)Temporary use npm with default value ======================== */
//   // .option('-p --package [string]', 'The package manager to use for the new project')
//   .action(initAction);

// nextui
//   .command('add')
//   .description('Adds components to your project')
//   .argument('[components...]', 'Names of components to add')
//   .option('-a --all [boolean]', 'Add all components', false)
//   .option('-p --packagePath [string]', 'Specify the path to the package.json file')
//   .option('-tw --tailwindPath [string]', 'Specify the path to the tailwind.config.js file')
//   .option('-app --appPath [string]', 'Specify the path to the App.tsx file')
//   .option('--prettier [boolean]', 'Apply Prettier formatting to the added content', false)
//   .option('--addApp [boolean]', 'Include App.tsx file content that requires a provider', false)
//   .action(addAction);

// nextui
//   .command('upgrade')
//   .description('Upgrades project components to the latest versions')
//   .argument('[components...]', 'Names of components to upgrade')
//   .option('-p --packagePath [string]', 'Specify the path to the package.json file')
//   .option('-a --all [boolean]', 'Upgrade all components', false)
//   .action(upgradeAction);

// nextui
//   .command('remove')
//   .description('Removes components from the project')
//   .argument('[components...]', 'Names of components to remove')
//   .option('-p --packagePath [string]', 'Specify the path to the package.json file')
//   .option('-a --all [boolean]', 'Remove all components', false)
//   .option('-tw --tailwindPath [string]', 'Specify the path to the tailwind.config.js file')
//   .action(removeAction);

// nextui
//   .command('list')
//   .description('Lists all components, showing status, descriptions, and versions')
//   .option('-p --packagePath [string]', 'Specify the path to the package.json file')
//   .option('-r --remote', 'List all components available remotely')
//   .action(listAction);
// nextui
//   .command('env')
//   .description('Displays debugging information for the local environment')
//   .option('-p --packagePath [string]', 'Specify the path to the package.json file')
//   .action(envAction);

// nextui
//   .command('doctor')
//   .description('Checks for issues in the project')
//   .option('-p --packagePath [string]', 'Specify the path to the package.json file')
//   .option('-tw --tailwindPath [string]', 'Specify the path to the tailwind.config.js file')
//   .option('-app --appPath [string]', 'Specify the path to the App.tsx file')
//   .option('-ca --checkApp [boolean]', 'Check the App.tsx file', false)
//   .option('-ct --checkTailwind [boolean]', 'Check the tailwind.config.js file', true)
//   .option('-cp --checkPnpm [boolean]', 'Check for Pnpm', true)
//   .action(doctorAction);

// nextui.hook('preAction', async (command) => {
//   const args = command.args?.[0];

//   if (args && commandList.includes(args as CommandName)) {
//     // Before run the command init the components.json
//     const nextUIComponents = (await getComponents()).components;

//     initStoreComponentsData(nextUIComponents);
//   }

//   const cliLatestVersion = await getStore('cliLatestVersion');
//   const latestVersion = await getStore('latestVersion');

//   // Init latest version
//   store.latestVersion = latestVersion;
//   store.cliLatestVersion = cliLatestVersion;

//   // Add NextUI CLI version check preAction
//   const currentVersion = pkg.version;

//   if (compareVersions(currentVersion, cliLatestVersion) === -1) {
//     outputBox({
//       color: 'yellow',
//       padding: 1,
//       text: `${chalk.gray(
//         `Available upgrade: v${currentVersion} -> ${chalk.greenBright(
//           `v${cliLatestVersion}`
//         )}\nRun \`${chalk.cyan(
//           'npm install nextui-cli@latest'
//         )}\` to upgrade\nChangelog: ${chalk.underline(
//           'https://github.com/nextui-org/nextui-cli/releases'
//         )}`
//       )}`,
//       title: gradientString('NextUI CLI')
//     });
//     Logger.newLine();
//   }
// });

// nextui.parseAsync(process.argv).catch(async (reason) => {
//   Logger.newLine();
//   Logger.error('Unexpected error. Please report it as a bug:');
//   Logger.log(reason);
//   Logger.newLine();
//   process.exit(1);
// });

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

// /*

// ________                  __ 
// /        |                /  |
// $$$$$$$$/  _______    ____$$ |
// $$ |__    /       \  /    $$ |
// $$    |   $$$$$$$  |/$$$$$$$ |
// $$$$$/    $$ |  $$ |$$ |  $$ |
// $$ |_____ $$ |  $$ |$$ \__$$ |
// $$       |$$ |  $$ |$$    $$ |
// $$$$$$$$/ $$/   $$/  $$$$$$$/ 

// */                          
 
var blessed = require('blessed');

// Create a screen object.
var screen = blessed.screen({
  smartCSR: true
});

screen.title = 'my window title';

// Create a box perfectly centered horizontally and vertically.
var box = blessed.box({
  top: 'center',
  left: 'center',
  width: '50%',
  height: '50%',
  content: 'Hello {bold}world{/bold}!',
  tags: true,
  border: {
    type: 'line'
  },
  style: {
    fg: 'white',
    bg: 'magenta',
    border: {
      fg: '#f0f0f0'
    },
    hover: {
      bg: 'green'
    }
  }
});

// Append our box to the screen.
screen.append(box);

// Add a png icon to the box
var icon = blessed.image({
  parent: box,
  top: 0,
  left: 0,
  type: 'overlay',
  width: 'shrink',
  height: 'shrink',
  file: __dirname + '/my-program-icon.png',
  search: false
});

// If our box is clicked, change the content.
box.on('click', function(data) {
  box.setContent('{center}Some different {red-fg}content{/red-fg}.{/center}');
  screen.render();
});

// If box is focused, handle `enter`/`return` and give us some more content.
box.key('enter', function(ch, key) {
  box.setContent('{right}Even different {black-fg}content{/black-fg}.{/right}\n');
  box.setLine(1, 'bar');
  box.insertLine(1, 'foo');
  screen.render();
});

// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Focus our element.
box.focus();

// Render the screen.
screen.render();
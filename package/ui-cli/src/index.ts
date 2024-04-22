#!/usr/bin/env node
import type { CommandName } from '@helpers/type';
import chalk from 'chalk';
import { Command } from 'commander';
import { exec } from '@helpers/exec';
import { Logger, gradientString } from '@helpers/logger';
import { findMostMatchText } from '@helpers/math-diff';
import { outputBox } from '@helpers/output-info';
import { getCommandDescAndLog } from '@helpers/utils';
import chalkAnimation from 'chalk-animation';
import pkg from '../package.json';
import { addAction } from './actions/add-action';
import { doctorAction } from './actions/doctor-action';
import { envAction } from './actions/env-action';
import { initAction } from './actions/init-action';
import { listAction } from './actions/list-action';
import { removeAction } from './actions/remove-action';
import { upgradeAction } from './actions/upgrade-action';
import { initStoreComponentsData } from './constants/component';
import { getStore, store } from './constants/store';
import { compareVersions, getComponents } from './scripts/helpers';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
import prompt from "prompts";
import Table from "tty-table";
import terminalLink from 'terminal-link';

let interval;
let COPYRIGHT_INFO: string = "So, except the base components this cli uses other UI frameworks which respectly belongs to them. By using this cli we do not any miss downloads or bad stuffs that challanges any thread to the respective owners. Thanks"

/*
$$\   $$\                       $$\               $$\ 
$$$\  $$ |                      $$ |              \__|
$$$$\ $$ | $$$$$$\  $$\   $$\ $$$$$$\   $$\   $$\ $$\ 
$$ $$\$$ |$$  __$$\ \$$\ $$  |\_$$  _|  $$ |  $$ |$$ |
$$ \$$$$ |$$$$$$$$ | \$$$$  /   $$ |    $$ |  $$ |$$ |
$$ |\$$$ |$$   ____| $$  $$<    $$ |$$\ $$ |  $$ |$$ |
$$ | \$$ |\$$$$$$$\ $$  /\$$\   \$$$$  |\$$$$$$  |$$ |
\__|  \__| \_______|\__/  \__|   \____/  \______/ \__|
*/

const commandList: CommandName[] = ['add', 'env', 'init', 'list', 'upgrade', 'doctor', 'remove'];

const nextui = new Command();

nextui
    .name('nextui')
    .usage('[command]')
    .description(`${chalkAnimation.rainbow(
        'Streamline UI Development with a CLI Tool for Efficient Component Integration'
    )}`)
    .version(pkg.version, '-v, --version', 'Output the current version')
    .helpOption('-h, --help', 'Display help for command')
    .allowUnknownOption()
    .action(async (_, command) => {

        // let isArgs = false;

        // if (command) {
        //     const args = command.args?.[0];

        //     if (args && !commandList.includes(args as CommandName)) {
        //         isArgs = true;

        //         const matchCommand = findMostMatchText(commandList, args);

        //         if (matchCommand) {
        //             Logger.error(
        //                 `Unknown command '${args}', Did you mean '${chalk.underline(matchCommand)}'?`
        //             );
        //         } else {
        //             Logger.error(`Unknown command '${args}'`);
        //         }
        //     }
        // }

        // if (!isArgs) {
        //     const helpInfo = (await exec('nextui --help', { logCmd: false, stdio: 'pipe' })) as string;

        //     let helpInfoArr = helpInfo.split('\n');

        //     helpInfoArr = helpInfoArr.filter((info) => info && !info.includes('NextUI CLI v'));
        //     // Add command name color
        //     helpInfoArr = helpInfoArr.map((info) => {
        //         const command = info.match(/(\w+)\s\[/)?.[1];

        //         if (command) {
        //             return info.replace(command, chalk.cyan(command));
        //         }

        //         return info;
        //     });

        //     Logger.log(helpInfoArr.join('\n'));

        //     console.log("\n");

        //     (async function () {
        //         const questions: any[] = [
        //             {
        //                 type: 'text',
        //                 name: 'twitter',
        //                 message: `What's your twitter handle?`,
        //                 initial: `terkelg`,
        //                 format: (v: string) => `@${v}`
        //             },
        //             {
        //                 type: 'number',
        //                 name: 'age',
        //                 message: 'How old are you?',
        //                 validate: (value: number) => value < 18 ? `Sorry, you have to be 18` : true
        //             },
        //             {
        //                 type: 'password',
        //                 name: 'secret',
        //                 message: 'Tell me a secret'
        //             },
        //             {
        //                 type: 'confirm',
        //                 name: 'confirmed',
        //                 message: 'Can you confirm?'
        //             },
        //             {
        //                 type: (prev: boolean) => prev && 'toggle',
        //                 name: 'confirmtoggle',
        //                 message: 'Can you confirm again?',
        //                 active: 'yes',
        //                 inactive: 'no'
        //             },
        //             {
        //                 type: 'list',
        //                 name: 'keywords',
        //                 message: 'Enter keywords'
        //             },
        //             {
        //                 type: 'select',
        //                 name: 'color',
        //                 message: 'Pick a color',
        //                 choices: [
        //                     { title: 'Red', description: 'This option has a description.', value: '#ff0000' },
        //                     { title: 'Green', value: '#00ff00' },
        //                     { title: 'Yellow', value: '#ffff00', disabled: true },
        //                     { title: 'Blue', value: '#0000ff' }
        //                 ]
        //             },
        //             {
        //                 type: 'multiselect',
        //                 name: 'multicolor',
        //                 message: 'Pick colors',
        //                 hint: false,
        //                 choices: [
        //                     { title: 'Red', description: 'This option has a description.', value: '#ff0000' },
        //                     { title: 'Green', value: '#00ff00' },
        //                     { title: 'Yellow', value: '#ffff00', disabled: true },
        //                     { title: 'Blue', value: '#0000ff' }
        //                 ]
        //             },
        //             {
        //                 type: 'autocomplete',
        //                 name: 'actor',
        //                 message: 'Pick your favorite actor',
        //                 initial: 1,
        //                 limit: 3,
        //                 suggest: (input: string, choices: any[]) => choices.filter(i => i.title.toLowerCase().includes(input.toLowerCase())),
        //                 choices: [
        //                     { title: 'Cage' },
        //                     { title: 'Clooney', value: 'silver-fox' },
        //                     { title: 'Gyllenhaal' },
        //                     { title: 'Gibson' },
        //                     { title: 'Grant', description: 'This option has a description.' },
        //                     { title: 'Hanks' },
        //                     { title: 'Downey Jr.' }
        //                 ],
        //                 fallback: {
        //                     title: `This is the fallback. Its value is 'fallback'`,
        //                     value: 'fallback'
        //                 }
        //             },
        //             {
        //                 type: 'date',
        //                 name: 'birthday',
        //                 message: `What's your birthday?`,
        //                 validate: (date: any) => date > Date.now() ? `Your birth day can't be in the future` : true
        //             },
        //             {
        //                 type: 'number',
        //                 name: 'prompt',
        //                 message: 'This will be overridden',
        //                 onRender(color: any) {
        //                     this.no = (this.no || 1);
        //                     this.msg = `Enter a number (e.g. ${color.cyan(this.no)})`;
        //                     if (!interval) interval = setInterval(() => {
        //                         this.no += 1;
        //                         this.render();
        //                     }, 1000);
        //                 }
        //             }
        //         ];

        //         const answers = await prompt(questions, { onCancel: cleanup, onSubmit: cleanup });
        //         console.log(answers);
        //     })();

        //     function cleanup() {
        //         clearInterval(interval);
        //     }
        // }
        // (async function () {
        //     const questions: any[] = [
        //         {
        //             type: 'text',
        //             name: 'twitter',
        //             message: `What's your twitter handle?`,
        //             initial: `terkelg`,
        //             format: (v: string) => `@${v}`
        //         },
        //         {
        //             type: 'number',
        //             name: 'age',
        //             message: 'How old are you?',
        //             validate: (value: number) => value < 18 ? `Sorry, you have to be 18` : true
        //         },
        //         {
        //             type: 'password',
        //             name: 'secret',
        //             message: 'Tell me a secret'
        //         },
        //         {
        //             type: 'confirm',
        //             name: 'confirmed',
        //             message: 'Can you confirm?'
        //         },
        //         {
        //             type: (prev: boolean) => prev && 'toggle',
        //             name: 'confirmtoggle',
        //             message: 'Can you confirm again?',
        //             active: 'yes',
        //             inactive: 'no'
        //         },
        //         {
        //             type: 'list',
        //             name: 'keywords',
        //             message: 'Enter keywords'
        //         },
        //         {
        //             type: 'select',
        //             name: 'color',
        //             message: 'Pick a color',
        //             choices: [
        //                 { title: 'Red', description: 'This option has a description.', value: '#ff0000' },
        //                 { title: 'Green', value: '#00ff00' },
        //                 { title: 'Yellow', value: '#ffff00', disabled: true },
        //                 { title: 'Blue', value: '#0000ff' }
        //             ]
        //         },
        //         {
        //             type: 'multiselect',
        //             name: 'multicolor',
        //             message: 'Pick colors',
        //             hint: false,
        //             choices: [
        //                 { title: 'Red', description: 'This option has a description.', value: '#ff0000' },
        //                 { title: 'Green', value: '#00ff00' },
        //                 { title: 'Yellow', value: '#ffff00', disabled: true },
        //                 { title: 'Blue', value: '#0000ff' }
        //             ]
        //         },
        //         {
        //             type: 'autocomplete',
        //             name: 'actor',
        //             message: 'Pick your favorite actor',
        //             initial: 1,
        //             limit: 3,
        //             suggest: (input: string, choices: any[]) => choices.filter(i => i.title.toLowerCase().includes(input.toLowerCase())),
        //             choices: [
        //                 { title: 'Cage' },
        //                 { title: 'Clooney', value: 'silver-fox' },
        //                 { title: 'Gyllenhaal' },
        //                 { title: 'Gibson' },
        //                 { title: 'Grant', description: 'This option has a description.' },
        //                 { title: 'Hanks' },
        //                 { title: 'Downey Jr.' }
        //             ],
        //             fallback: {
        //                 title: `This is the fallback. Its value is 'fallback'`,
        //                 value: 'fallback'
        //             }
        //         },
        //         {
        //             type: 'date',
        //             name: 'birthday',
        //             message: `What's your birthday?`,
        //             validate: (date: any) => date > Date.now() ? `Your birth day can't be in the future` : true
        //         },
        //         {
        //             type: 'number',
        //             name: 'prompt',
        //             message: 'This will be overridden',
        //             onRender(color: any) {
        //                 this.no = (this.no || 1);
        //                 this.msg = `Enter a number (e.g. ${color.cyan(this.no)})`;
        //                 if (!interval) interval = setInterval(() => {
        //                     this.no += 1;
        //                     this.render();
        //                 }, 1000);
        //             }
        //         }
        //     ];

        //     const answers = await prompt(questions, { onCancel: cleanup, onSubmit: cleanup });
        //     console.log(answers);
        // })();

        // function cleanup() {
        //     clearInterval(interval);
        // }
        const header = [
            {
                value: "Command",
                headerColor: "cyan",
                color: "white",
                align: "left",
                width: "10%"
            },
            {
                value: "Description",
                width: "25%",
                headerColor: "magenta",
                color: "gray"
            },
            {
                value: "Arguments",
                color: "white",
                width: "10%",
            }
        ]

        const rows: any[] = [
            {
                Command: "suggest",
                Description: "Suggests you about what ui component is best for your job and ai chat...",
                Arguments: `${chalk.yellow.italic("[--option]")} ${chalk.blue.italic("[--flag]")}`,
            },
            {
                Command: "explain",
                Description: "Explains you what course of actions you should take to solve your ui problems...",
                Arguments: `${chalk.yellow.italic("[--option]")} ${chalk.blue.italic("[--flag]")}`,

            },
            {
                Command: "create",
                Description: "Creates A new project using any frontend frameworks",
                Arguments: `${chalk.yellow.italic("[--option]")} ${chalk.blue.italic("[--flag]")}`,

            },
            {
                Command: "init",
                Description: "Initializes a new project",
                Arguments: `${chalk.yellow.italic("[--option]")} ${chalk.blue.italic("[--flag]")}`,

            },
            // {
            //   Command: "delete",
            //   Description: "Explains you what course of actions you should take to solve your ui problems...",
            //   Arguments: `${chalk.yellow.italic("[--option]")} ${chalk.blue.italic("[--flag]")}`,

            // },
            {
                Command: "add",
                Description: "Adds components to your project",
                Arguments: `${chalk.yellow.italic("[--option]")} ${chalk.blue.italic("[--flag]")}`,

            },
            {
                Command: "remove",
                Description: "Removes components from the project",
                Arguments: `${chalk.yellow.italic("[--option]")} ${chalk.blue.italic("[--flag]")}`,

            },
            {
                Command: "update",
                Description: "Upgrades project components to the latest versions",
                Arguments: `${chalk.yellow.italic("[--option]")} ${chalk.blue.italic("[--flag]")}`,

            },
            {
                Command: "list",
                Description: "Lists all components, showing status, descriptions, and versions",
                Arguments: `${chalk.yellow.italic("[--option]")} ${chalk.blue.italic("[--flag]")}`,

            },
            // {
            //     Command: "env",
            //     Description: "Displays debugging information for the local environment",
            //     Arguments: `${chalk.yellow.italic("[--option]")} ${chalk.blue.italic("[--flag]")}`,

            // },
            {
                Command: "doctor",
                Description: "Checks for issues in the project",
                Arguments: `${chalk.yellow.italic("[--option]")} ${chalk.blue.italic("[--flag]")}`,

            }
        ]

        // Example with arrays as rows
        const rows2 = [
            ["tallarin verde", 2.50, 15.50, "no"],
            ["aji de gallina", 1.80, 14.50, "no"]
        ].map((arr, index) => {
            arr.splice(1, 0, rows[index].description); return arr
        })

        const options = {
            borderStyle: "solid",
            paddingBottom: 0,
            headerAlign: "center",
            headerColor: "green",
            align: "left",
            color: "white",
            width: "80%"
        }

        const t1 = Table(header, rows, options).render()
        console.log(t1)
        const link = terminalLink('My Website', 'https://sindresorhus.com');
        console.log(link);
    });

nextui
    .command('suggest')
    .description('Suggests you about what ui component is best for your job and ai chat...')
    .argument('[components...]', 'Names of components to add')
    .option('-a --all [boolean]', 'Add all components', false)
    .option('-p --packagePath [string]', 'Specify the path to the package.json file')
    .option('-tw --tailwindPath [string]', 'Specify the path to the tailwind.config.js file')
    .option('-app --appPath [string]', 'Specify the path to the App.tsx file')
    .option('--prettier [boolean]', 'Apply Prettier formatting to the added content', false)
    .option('--addApp [boolean]', 'Include App.tsx file content that requires a provider', false)
    .action(addAction);

nextui
    .command('explain')
    .description('Explains you what course of actions you should take to solve your ui problems...')
    .argument('[components...]', 'Names of components to add')
    .option('-a --all [boolean]', 'Add all components', false)
    .option('-p --packagePath [string]', 'Specify the path to the package.json file')
    .option('-tw --tailwindPath [string]', 'Specify the path to the tailwind.config.js file')
    .option('-app --appPath [string]', 'Specify the path to the App.tsx file')
    .option('--prettier [boolean]', 'Apply Prettier formatting to the added content', false)
    .option('--addApp [boolean]', 'Include App.tsx file content that requires a provider', false)
    .action(addAction);

nextui
    .command('create')
    .description('Creates A new project using any frontend frameworks')
    .argument('[components...]', 'Names of components to add')
    .option('-a --all [boolean]', 'Add all components', false)
    .option('-p --packagePath [string]', 'Specify the path to the package.json file')
    .option('-tw --tailwindPath [string]', 'Specify the path to the tailwind.config.js file')
    .option('-app --appPath [string]', 'Specify the path to the App.tsx file')
    .option('--prettier [boolean]', 'Apply Prettier formatting to the added content', false)
    .option('--addApp [boolean]', 'Include App.tsx file content that requires a provider', false)
    .action(addAction);

nextui
    .command('init')
    .description('Initializes a new project')
    .argument('[projectName]', 'Name of the project to initialize')
    .option('-t --template [string]', 'Specify a template for the new project, e.g., app, pages')
    /** ======================== TODO:(winches)Temporary use npm with default value ======================== */
    // .option('-p --package [string]', 'The package manager to use for the new project')
    .action(initAction);

nextui
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

nextui
    .command('remove')
    .description('Removes components from the project')
    .argument('[components...]', 'Names of components to remove')
    .option('-p --packagePath [string]', 'Specify the path to the package.json file')
    .option('-a --all [boolean]', 'Remove all components', false)
    .option('-tw --tailwindPath [string]', 'Specify the path to the tailwind.config.js file')
    .action(removeAction);

nextui
    .command('upgrade')
    .description('Upgrades project components to the latest versions')
    .argument('[components...]', 'Names of components to upgrade')
    .option('-p --packagePath [string]', 'Specify the path to the package.json file')
    .option('-a --all [boolean]', 'Upgrade all components', false)
    .action(upgradeAction);

nextui
    .command('list')
    .description('Lists all components, showing status, descriptions, and versions')
    .option('-p --packagePath [string]', 'Specify the path to the package.json file')
    .option('-r --remote', 'List all components available remotely')
    .action(listAction);

nextui
    .command('env')
    .description('Displays debugging information for the local environment')
    .option('-p --packagePath [string]', 'Specify the path to the package.json file')
    .action(envAction);

nextui
    .command('doctor')
    .description('Checks for issues in the project')
    .option('-p --packagePath [string]', 'Specify the path to the package.json file')
    .option('-tw --tailwindPath [string]', 'Specify the path to the tailwind.config.js file')
    .option('-app --appPath [string]', 'Specify the path to the App.tsx file')
    .option('-ca --checkApp [boolean]', 'Check the App.tsx file', false)
    .option('-ct --checkTailwind [boolean]', 'Check the tailwind.config.js file', true)
    .option('-cp --checkPnpm [boolean]', 'Check for Pnpm', true)
    .action(doctorAction);

nextui.hook('preAction', async (command) => {
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
                `Available upgrade: v${currentVersion} -> ${chalk.green(
                    `v${cliLatestVersion}`
                )}\nRun \`${chalk.cyan(
                    'npm install nextui-cli@latest'
                )}\` to upgrade\nChangelog: ${chalk.underline(
                    'https://github.com/nextui-org/nextui-cli/releases'
                )}`
            )}`,
            title: gradientString('NextUI CLI')
        });
        Logger.newLine();
    }
});

nextui.parseAsync(process.argv).catch(async (reason) => {
    Logger.newLine();
    Logger.error('Unexpected error. Please report it as a bug:');
    Logger.log(reason);
    Logger.newLine();
    process.exit(1);
});

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


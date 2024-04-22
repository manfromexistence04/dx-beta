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
import Table from "../te/src/main";
import terminalLink from 'terminal-link';
import * as readline from 'readline';
import cliCursor from 'cli-cursor';
// import Table from 'ink-table'
import React, { useState, useEffect } from 'react';
import { render, Text } from 'ink';

// cliCursor.hide();

// const unicornsAreAwesome = true;
// cliCursor.toggle(unicornsAreAwesome);
// var Canvas = require('drawille');
// var line = require('bresenham');

// var c = new Canvas(160, 160);

// function draw() {
//   c.clear();
//   var t = new Date();
//   var sin = function(i, l) {
//     return Math.floor(Math.sin(i*2*Math.PI)*l+80);
//   }, cos = function(i, l) {
//     return Math.floor(Math.cos(i*2*Math.PI)*l+80);
//   };
//   line(80, 80, sin(t.getHours()/24, 30), 160-cos(t.getHours()/24, 30), c.set.bind(c));
//   line(80, 80, sin(t.getMinutes()/60, 50), 160-cos(t.getMinutes()/60, 50), c.set.bind(c));
//   line(80, 80, sin(t.getSeconds()/60+(+t%1000)/60000, 75), 160-cos(t.getSeconds()/60+(+t%1000)/60000, 75), c.set.bind(c));
//   process.stdout.write(c.frame());
// }

// setInterval(draw, 1000/24);
let interval;
let COPYRIGHT_INFO: string = "So, except the base components this cli uses other UI frameworks which respectly belongs to them. By using this cli we do not any miss downloads or bad stuffs that challanges any thread to the respective owners. Thanks"
let CLI_INFO: string = "This innovative solution empowers developers by automating the often-tedious process of integrating UI components.\nEliminate the need for manual configuration and repetitive tasks, and unlock a new level of development efficiency.\nTo maintain your current session and avoid interruption, please execute any command within the next 10s\n";
let CLI_OPTIONS: string = `${chalk.hex("#ff00d9")("Options:")} \n-a --all [boolean]: Add all components\n-p --packagePath [string]: Specify the path to the package.json file\n-app --appPath [string]: Specify the path to the App.tsx file\n`;
let CLI_FLAGS: string = `${chalk.hex("#9500ff")("Flags:")} \n--prettier [boolean]: Apply Prettier formatting to the added content\n--addApp [boolean]: Include App.tsx file content that requires a provider`;
let CLI_EXAMPLES: string = `${chalk.hex("#ff0080")("\nExamples:")} \nnpm ui suggest "what is the best library which simple and yet beautiful?"\nnpm ui explain "how to center a div? With a very basic and beginner explaination" \nnpm ui create nextjs-ui-website\nnpm ui init nextjs-ui-website \nnpm ui add -a \nnpm ui remove accordion`;


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
        `Dx/Ui(v${pkg.version}): Streamline UI Development with a CLI Tool for Efficient Component Integration`
    )}`)
    .version(pkg.version, '-v, --version', 'Output the current version')
    .helpOption('-h, --help', 'Display help for command')
    .allowUnknownOption()
    .action(async (_, command) => {

        console.log(CLI_INFO);
        console.log(CLI_OPTIONS);
        console.log(CLI_FLAGS);
        const header = [
            {
                value: "Command",
                headerColor: "red",
                color: "green",
                align: "left",
                width: "8%"
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
                align: "center",
                width: "10%",
                headerColor: "cyan",
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
            {
                Command: "doctor",
                Description: "Checks for issues in the project",
                Arguments: `${chalk.yellow.italic("[--option]")} ${chalk.blue.italic("[--flag]")}`,

            }
        ]
        const options = {
            borderStyle: "solid",
            headerAlign: "center",
            headerColor: "green",
            align: "left",
            color: "white",
            width: '80%'
        }
        const COMMAND_DETAILS = Table(header, rows, options).render();
        console.log(COMMAND_DETAILS);
        console.log(CLI_EXAMPLES);



        // const Counter = () => {
        //     const [counter, setCounter] = useState(0);

        //     useEffect(() => {
        //         const timer = setInterval(() => {
        //             setCounter(previousCounter => previousCounter + 1);
        //         }, 100);

        //         return () => {
        //             clearInterval(timer);
        //         };
        //     }, []);

        //     return <Text color="green" > { counter } tests passed </Text>;
        // };

        // render(<Counter />);
        // var ProgressBar = require('progress');
        // var https = require('https');

        // var req = https.request({
        //     host: 'download.github.com',
        //     port: 443,
        //     path: '/visionmedia-node-jscoverage-0d4608a.zip'
        // });

        // req.on('response', function (res) {
        //     var len = parseInt(res.headers['content-length'], 10);

        //     console.log();
        //     var bar = new ProgressBar('  downloading [:bar] :rate/bps :percent :etas', {
        //         complete: '=',
        //         incomplete: ' ',
        //         width: 20,
        //         total: len
        //     });

        //     res.on('data', function (chunk) {
        //         bar.tick(chunk.length);
        //     });

        //     res.on('end', function () {
        //         console.log('\n');
        //     });
        // });

        // req.end();


        // const data:any[] = [
        //     {
        //       name: 'Sosa Saunders',
        //       gender: 'male',
        //       age: 17,
        //       email: 'sosa.saunders@mail.com',
        //       phone: '+1 (809) 435-2786',
        //     },
        //     {
        //       name: 'Angelina Kirk',
        //       gender: 'female',
        //       age: 3,
        //       email: 'angelina@kirk.io',
        //       phone: '+1 (870) 567-3516',
        //     },
        //     {
        //       name: 'Bradford Rosales',
        //       gender: 'male',
        //       age: 20,
        //       email: 'bradfordrosales@fast.com',
        //       phone: '+1 (918) 573-3240',
        //     },
        //     {
        //       name: 'Gwen Schroeder',
        //       gender: 'female',
        //       age: 17,
        //       email: 'gwen@corp.xyz',
        //       phone: '+1 (987) 417-2062',
        //     },
        //     {
        //       name: 'Ellison Mann',
        //       gender: 'male',
        //       age: 5,
        //       email: 'ellisonmann@katakana.com',
        //       phone: '+1 (889) 411-2186',
        //     },
        //   ]

        //   const Basic:any = () => <Table data={data} />

        //   render(<Basic />)
        // cliCursor.hide();

        // const unicornsAreAwesome = true;
        // cliCursor.toggle(unicornsAreAwesome);
        // var chart = require('chart');
        // var clear = require('clear');

        // var data:any = [1, 2,3];

        // clear();
        // console.log(chart(data, {
        //     width: 130,
        //     height: 30,
        //     pointChar: '█',
        //     negativePointChar: '░'
        // }));
        // async function CLI_HOME_ACTIONS () {

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
        //                     if(this.no > 10){
        //                         console.log("Exiting...");
        //                         process.exit(0);
        //                     }
        //                     this.render();
        //                 }, 1000);
        //                 // if(interval>10){
        //                 //     process.exit();
        //                 // }
        //             }
        //         }
        //     ];
        //     const answers = await prompt(questions, { onCancel: cleanup, onSubmit: cleanup });
        //     console.log(answers);

        // }
        // CLI_HOME_ACTIONS();
        // function cleanup() {
        //     clearInterval(interval);
        // }
        // Countdown
        // const rl = readline.createInterface({
        //     input: process.stdin,
        //     output: process.stdout,
        // });

        // function countdown(seconds: number): any {
        //     const intervalId = setInterval(() => {
        //         seconds--;
        //         if (seconds === 0) {
        //             clearInterval(intervalId);
        //             process.stdout.write('\nSession expired!');
        //             rl.close();
        //         } else {
        //             // Move cursor to the bottom left corner before writing
        //             process.stdout.write('\x1b[?25l'); // Hide cursor
        //             process.stdout.cursorTo(0, process.stdout.rows - 1); // Move cursor to bottom left
        //             // Overwrite existing countdown with spaces
        //             process.stdout.write(' '.repeat(process.stdout.columns)); // Clear current line
        //             process.stdout.cursorTo(0, process.stdout.rows - 1); // Move cursor back to bottom left
        //             process.stdout.write(`${seconds} seconds`);
        //             process.stdout.write('\x1b[?25h'); // Show cursor again
        //         }
        //     }, 1000); // Update every second
        // }

        // rl.on('line', (input: string) => {
        //     // Reset timer on any user input
        //     clearInterval(countdown(10)); // Restart countdown with 10 seconds
        //     if (input.toLowerCase() === 'q') {
        //         process.stdout.write('\nExiting...\n');
        //         rl.close();
        //         process.exit(0); // Exit with code 0 (successful termination)
        //     }
        // });

        // // Start the countdown
        // countdown(10);

        // const link = terminalLink('My Website', 'https://sindresorhus.com');
        // console.log(link);
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
    // const currentVersion = pkg.version;

    // if (compareVersions(currentVersion, cliLatestVersion) === -1) {
    //     outputBox({
    //         color: 'yellow',
    //         padding: 1,
    //         text: `${chalk.gray(
    //             `Available upgrade: v${currentVersion} -> ${chalk.green(
    //                 `v${cliLatestVersion}`
    //             )}\nRun \`${chalk.cyan(
    //                 'npm install nextui-cli@latest'
    //             )}\` to upgrade\nChangelog: ${chalk.underline(
    //                 'https://github.com/nextui-org/nextui-cli/releases'
    //             )}`
    //         )}`,
    //         title: gradientString('NextUI CLI')
    //     });
    //     Logger.newLine();
    // }
});

nextui.parseAsync(process.argv).catch(async (reason) => {
    Logger.newLine();
    Logger.error('Unexpected error. Please report it as a bug:');
    Logger.log(reason);
    Logger.newLine();
    process.exit(1);
});

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

*/

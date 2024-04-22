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

        // Example with arrays as rows
        const rows2 = [
            ["tallarin verde", 2.50, 15.50, "no"],
            ["aji de gallina", 1.80, 14.50, "no"]
        ].map((arr, index) => {
            arr.splice(1, 0, rows[index].description); return arr
        })

        const options = {
            borderStyle: "solid",
            headerAlign: "center",
            headerColor: "green",
            align: "left",
            color: "white",
            width: '51%'
        }

        const t1 = Table(header, rows, options).render()
        console.log(t1)
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

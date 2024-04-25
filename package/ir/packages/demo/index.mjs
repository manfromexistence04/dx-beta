#!/usr/bin/env node
/* eslint-disable no-await-in-loop */

import select from '/workspace/dx-beta/package/ir/packages/select/src/index.mts';
import input from '/workspace/dx-beta/package/ir/packages/input/src/index.mts';
// import {select}  from '@inquirer/prompts';
import checkboxDemo from './demos/checkbox.mjs';
import confirmDemo from './demos/confirm.mjs';
import editorDemo from './demos/editor.mjs';
import expandDemo from './demos/expand.mjs';
import inputDemo from './demos/input.mjs';
import passwordDemo from './demos/password.mjs';
import rawlistDemo from './demos/rawlist.mjs';
import selectDemo from './demos/select.mjs';
import timeoutDemo from './demos/timeout.mjs';
import chalk from "chalk";

import cliCursor from 'cli-cursor';
const prompts = require('/workspace/dx-beta/package/ir/packages/demo/ps/lib/index.js');
cliCursor.hide();

// let commnad = await input({ message: "hello" });

// (async () => {

//   const response = await prompts({
//     type: 'select',
//     name: 'value',
//     message: 'Pick a color',
//     choices: [
//       { title: 'Red', description: 'This option has a description', value: '#ff0000' },
//       { title: 'Green', value: '#00ff00', disabled: true },
//       { title: 'Blue', value: '#0000ff' }
//     ],
//     initial: 1
//   });

//   console.log(response); // => { value: 24 }

// })();

const demos = {
  checkbox: checkboxDemo,
  confirm: confirmDemo,
  editor: editorDemo,
  expand: expandDemo,
  input: inputDemo,
  password: passwordDemo,
  rawlist: rawlistDemo,
  select: selectDemo,
  timeout: timeoutDemo,
};

async function askNextDemo() {

  // let commnad = await input({message:"hello"})
  let selectedDemo = await select({
    commandUser: `${chalk.hex("#03fc90")("➜ ")} ${chalk.hex("#03fcf4")("path")} ${chalk.hex("#0320fc")(`manfromexistence:${chalk.hex("#0320fc")("(")}${chalk.hex("#fc038c")("freetier")}${chalk.hex("#0320fc")(")")} ${chalk.hex("#f8fc03")("✗ ")}`)}`,
    // message: `${chalk.hex("#03fc90")("➜ ")} ${chalk.hex("#03fcf4")("path")} ${chalk.hex("#0320fc")(`manfromexistence:${chalk.hex("#0320fc")("(")}${chalk.hex("#fc038c")("freetier")}${chalk.hex("#0320fc")(")")} ${chalk.hex("#f8fc03")("✗ ")}`)}`,
    choices: [
      { name: "Select",description:"This is a very usefull thing", value: 'input' },
      { name: 'Password', value: 'password' },
      { name: 'Confirm', value: 'confirm' },
      { name: 'Select', value: 'select' },
      { name: 'Checkbox', value: 'checkbox' },
      { name: 'Expand', value: 'expand' },
      { name: 'Rawlist', value: 'rawlist' },
      { name: 'Editor', value: 'editor' },
      { name: 'Advanced demos', value: 'advanced' },
      { name: "Exit (I'm done)", value: 'exit' },
    ],
  });

  if (selectedDemo === 'advanced') {
    selectedDemo = await select({
      message: 'Which demo do you want to run?',
      choices: [
        { name: 'Default value after timeout', value: 'timeout' },
        { name: 'Go back', value: 'back' },
      ],
    });
  }

  if (selectedDemo === 'back') {
    return askNextDemo();
  }

  return selectedDemo;
}

(async () => {
  let nextDemo = await askNextDemo();
  while (nextDemo !== 'exit') {
    await demos[nextDemo]();
    nextDemo = await askNextDemo();
  }
})();


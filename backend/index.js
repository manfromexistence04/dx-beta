// import { CohereClient } from "cohere-ai";

// const cohere = new CohereClient({
//   token: "agnI51GCGhkPOpIxQdo3Hqkdw3D60OXYIAvBwfan",
// });

// (async () => {
//   const stream = await cohere.chatStream({
//     model: "command-r-plus",
//     message: "<YOUR MESSAGE HERE>",
//     temperature: 0.3,
//     chatHistory: [],
//     promptTruncation: "AUTO",
//     connectors: [{"id":"web-search"}]
//   });

//   for await (const chat of stream) {
//       if (chat.eventType === "text-generation") {
//           process.stdout.write(chat.text);
//       }
//   }
// })();
// const pymport = require('pymport');

// const text = "The course starts next";
// const numWords = 5;

// (async () => {
//   try {
//     const { GPT2 } = await pymport('main.py'); // Path to your Python script
//     const gpt2 = new GPT2();
//     const predictedWords = await gpt2.predict_next(text, numWords);
//     console.log(predictedWords);
//   } catch (err) {
//     console.error(err);
//   }
// })();
// const { PythonShell } = require('python-shell');

// const text = "The course starts next";
// const options = {
//   scriptPath: './main.py', // Replace with the path to your Python script
//   args: [text, 5] // List of arguments to pass to the Python script
// };

// PythonShell.run('pymport main.py', options, (err: any, results: any[]) => {
//   if (err) throw err;
//   console.log(results[0]); // This will contain the predicted next words
// });
// import { pymport, proxify } from 'pymport';
// const np = proxify(pymport('numpy'));

// const a = np.arange(15).reshape(3, 5);
// const b = np.ones([2, 3], { dtype: np.int16 });

// console.log(a)
// Example from
// https://matplotlib.org/stable/gallery/lines_bars_and_markers/bar_colors.html#sphx-glr-gallery-lines-bars-and-markers-bar-colors-py
const { pymport } = require('../proxified');

const plt = pymport('matplotlib.pyplot');

const plots = plt.subplots();
const ax = plots.item(1);

const fruits = ['apple', 'blueberry', 'cherry', 'orange'];
const counts = [40, 100, 30, 55];
const bar_labels = ['red', 'blue', '_red', 'orange'];
const bar_colors = ['tab:red', 'tab:blue', 'tab:red', 'tab:orange'];

ax.bar(fruits, counts, { label: bar_labels, color: bar_colors });

ax.set_ylabel('fruit supply');
ax.set_title('Fruit supply by kind and color');
ax.legend({ title: 'Fruit color' });

plt.show();

/*
Original Python code

import matplotlib.pyplot as plt

fig, ax = plt.subplots()

fruits = ['apple', 'blueberry', 'cherry', 'orange']
counts = [40, 100, 30, 55]
bar_labels = ['red', 'blue', '_red', 'orange']
bar_colors = ['tab:red', 'tab:blue', 'tab:red', 'tab:orange']

ax.bar(fruits, counts, label=bar_labels, color=bar_colors)

ax.set_ylabel('fruit supply')
ax.set_title('Fruit supply by kind and color')
ax.legend(title='Fruit color')

plt.show()

*/
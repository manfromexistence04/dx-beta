const { spawn } = require('child_process');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter a bash command: ', (command) => {
  const ls = spawn('bash', ['-c', command]);

  ls.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  ls.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  ls.on('close', (code) => {
    console.log(`Bash command exited with code: ${code}`);
    readline.close();
  });
});

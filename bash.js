process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if(cmd === 'pwd') {
    process.stdout.write(process.cwd());
    process.stdout.write('\nprompt > ');
  } else {
    process.stdout.write("I don't understand.");
    process.stdout.write('\nprompt > ');
  }
})

// process.cwd()
//
// console.log(`Current directory: ${process.cwd()}`);

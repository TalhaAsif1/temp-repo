const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./content/text.txt', 'utf8');
const second = readFileSync('./content/text2.txt', 'utf8');

writeFileSync(
    './content/result-sync.txt',
    `Here is the result:\n ${first},${second}`,
    { flag: 'w' }

)
console.log('done with this');
console.log('starting the next one');

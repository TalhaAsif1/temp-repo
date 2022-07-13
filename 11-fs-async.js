const { readFile, writeFile } = require('fs');
const { Console } = require('node:console');

//err and result are callout functions , error is error
//and result is the result .
console.log('start');

const result1 = readFile('./content/text.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return;

    }
    console.log('function entered');
    const first = result;
    readFile('./content/text2.txt', 'utf8', (err, result) => {

        if (err) {
            console.log(err)
            return;
        }
        const second = result
        writeFile('./content/result-sync.txt',
            `Here is the result:\n\n ${first},${second}`,
            { flag: 'w' }, (err, result) => {

                if (err) {
                    console.log(err)
                    return

                }
                console.log(result)
          
            })
    })
})
console.log("after the data")

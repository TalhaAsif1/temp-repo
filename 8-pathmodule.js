
const os = require('os')
//info about current user
const user = os.userInfo()
console.log(user)
//returning system uptime in seconds
console.log(`uptime : ${os.uptime()}`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)
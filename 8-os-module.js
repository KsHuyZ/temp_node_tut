const os = require('os')
// infor about curent user
const user = os.userInfo()
console.log(user)
// method return the systenmuptime in second
console.log(`The system Uptime ${os.uptime()} second`)
const currentOS = {
    name: os.type(),
    osrelease: os.release(),
    totalMem: os.totalmem(),
    freeMem:os.freemem(), 
}
console.log(currentOS)
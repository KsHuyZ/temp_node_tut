const {readFile,writeFile} = require('fs')
readFile('./content/first.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})
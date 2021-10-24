const http = require('http')
const server = http.createServer((req,res)=>{
if(req.url==="/"){
    res.end("First")
    return
}else if(req.url==="/about"){
    res.end("Second case")
    return
}

    res.end(`<h1>We can't find your page</h1>
    <p>Maybe your link is incorrect </p>
    <a href='/'>Come back</a>
    `)


})
server.listen(5000)
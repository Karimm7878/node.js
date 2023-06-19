const http = require ('http')
const server = http.createServer((req,res)=>{
    res.write('<h1>Hello node!!!!<h1/>\n');
    res.end()
})
server.listen(3000,(err)=>{
    err? console.log(err): console.log("go to localhost 5000")
})
const fs= require('fs')
fs.writeFile("welcome.txt","hellow node",err=>{
    err? console.log(err):console.log('done')
})
// const sum = require('./sum.js');
// console.log(sum(2,3));
// nodemon => node monitor => shows live => but we have to refresh on to the server
var http = require('http')

//create a server object:
const server = http.createServer((req,res)=>{
    try{
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify({
           data:"Hello Anamika!" 
        }))
        }
    catch(err){
        res.writeHead(500,{'Content-Type':'application/json'});
        res.end(JSON.stringify({
            data : "ERROR WHILE LOADING TO THE SERVER"
        }))
    }
})

server.listen(3000,()=>{
    console.log("server is listening on port 3000");
})
// nvm => node version manager =>

// console.log(process.platform);
// console.log(process.cpuUsage());
// console.log(process.cwd());
// let c = 0;
// setInterval(()=>{c++;},1000);
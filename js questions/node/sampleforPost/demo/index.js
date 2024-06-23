// const addFn=require("./add");

// console.log("let's start");

// let sum =addFn(11, 20)
// document.write(sum);

// let sum1 =addFn(1, 2)
// console.log(sum1);

// require("./batman")
// require("./superman")

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const http=require('http')
// const fs=require('fs')

// http.createServer((req,res)=>{
//     if(req.url==='/' && req.method ==='GET' ){
//         fs.readFile('index.html',(err,data)=>{
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(data)
//         res.end()
//     })
//     }
//     else if(req.url==='/' && req.method === 'POST'){
//             let userdata='';
//             req.on("data",(chunk)=>{
//                 userdata += chunk.toString();

//             })
//     }
//     else if(req.url==='/profile'){
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write('i am profile')
//         res.end()
//     }else{
//     res.write('error')
//     res.end()
// }   
// }).listen(3000,()=>{
//     console.log('server started ');
// })




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const http=require('http')
// const fs=require('fs')


// http.createServer((req,res)=>{
//     fs.readFile('index.html',(err,data)=>{
//         if(req.url==='/')
//         {
//             res.writeHead(200,{})
//         }
//     })


// }).listen(8080,(h)=>
// {
//     console.log('loading');
// })


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const http = require("http");
const port = 8086;
const fs = require("fs");
const q = require("querystring");

const app = http.createServer((req, res) => {
  if (req.method === "GET") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("server error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  }

  if (req.method === "POST" && req.url === "/submit") {
    let userdata = "";
    req.on("data", (chunk) => {
      // console.log(chunk);
      userdata += chunk.toString();
    });
    req.on("end", () => {
      const data = q.parse(userdata); 
      let { rt } = data;
      console.log(rt);
      fs.readFile("out.html", "utf-8", (err, fileData) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/html" });
          res.end("server error");
        } else {
          const names = fileData.replace("{{rt}}", rt);
          res.end(names);
        }
      });
    });
  }
});
app.listen(port, () => {
  console.log("server successfully started on port", port);
});

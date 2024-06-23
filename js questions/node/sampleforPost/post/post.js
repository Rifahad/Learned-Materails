let http=require('http');
let fs=require('fs');
let qs=require('querystring')
let port=7000

const login=http.createServer((req,res)=>{
    if(req.method === "GET"){
        fs.readFile("signIn.html",(err,data)=>{
            if(err){
                res.writeHead(500,{'content-Type':'text/html'});
                res.end("server not found")
            }else{
                res.writeHead(200,{'content-Type':'text/html'})
                res.end(data)
            }
        })
    }
    if(req.method === 'POST' && req.url==='/welcome'){
        let signIn= '';
        req.on('data',(ep)=>{
            // console.log(ep);
            signIn+=ep.toString();
        });
        req.on('end',()=>{
            let details=qs.parse(signIn);
            let {email,password}=details
            console.log(email,password);
            fs.readFile('welcome.html','utf-8',(err,fdata)=>{
                if(err){
                    res.writeHead(404,{'content-Type':'text/html'})
                    res.end()
                }else{
                    let username=fdata.replace("{{name}}",email);
                    res.end(username);
                }
            })
        })
    }
})

login.listen(port,()=>{
    console.log('server started at port '+port);
})
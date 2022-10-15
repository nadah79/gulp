var ststicServer =require('static-server');
var server=new ststicServer({
    rootPath:'./dist/',
    port:4000
});
server.start(function(){
    console.log("port",server.port)
})

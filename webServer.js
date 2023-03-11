const http = require('http'); //http package
const fs = require('fs'); //read file

const PORT = 3000;

http.createServer((request, response) => {
  //get path
  const path = request.url;
  console.log(`[Request] ${path}`);

  const requestFile = path.endsWith('/') ? path + 'index.html' : path;

  if(!fs.existsSync(`.${requestFile}`)) {
    //client error responses
    response.writeHead(404);
    response.end();
    return;
  }

  //reading file
  const fileContent = fs.readFileSync(`.${requestFile}`);
  //successful responses
  response.writeHead(200);
  response.write(fileContent);
  response.end();

}).listen(PORT, '127.0.0.1');

console.log(`Server started on port ${PORT}`);
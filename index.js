const http = require('http');

// const hostname = '127.0.0.1';
// const server = http.createServer();

const port = 3000;
http.createServer ((req, res) => {
    const {
        headers,
        method,
        url
    } = req;

    let body = [];
    req.on('error', err =>{
        console.log(err);
    })
    .on('data', chunk => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
      

        res.on('error', err => {
            console.log(err);
        });

        res.writeHead(200, { 'Content-Type': 'text/html' });

        const responseBody = {headers, method, url, body};
        res.write(data);
        res.end();
    });
})
.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});


const data = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio</title>
</head>
<body>
    <h1>Web Developer</h1>
    <p>Do you want to see what a <strong>web developer</strong> can do?<br>I invite you to discover it for yourself.<br>
      My name is <strong>Ricardo Aranda</strong> and this is my Portfolio.</p>

      
</body>
</html>
`
require('dotenv').config();
const http = require('http');
const fs = require('fs');

const port = process.env.PORT;

const server = http.createServer((req, res) =>
{
	if(req.method === "GET")
	{
		switch(req.url)
		{
			case "/":
				fs.readFile('./dist/index.html', (err, content) =>
				{
					if(err) throw err;

					res.writeHead(200, { 'Content-Type': 'text/html' });
					res.write(content);
					res.end();
				});
				break;
			case "/favicon.png":
				fs.readFile('./dist/favicon.png', (err, content) =>
				{
					if(err) throw err;

					res.writeHead(200, { 'Content-Type': 'image/png' });
					res.write(content)
					res.end();
				});
				break;
			case "/style.css":
				fs.readFile('./dist/style.css', (err, content) =>
				{
					if(err) throw err;

					res.writeHead(200, { 'Content-Type': 'text/css' });
					res.write(content);
					res.end();
				});
				break;
		}
	}
	else if(req.method === "POST")
	{
		let data = "";

		if(req.url === "/signup")
		{
			req.on('data', chunk =>
			{
				data += chunk;
			});

			req.on('end', () =>
			{
				const newData = data.replace('+', ' ').replace('%40', '@').split('&');
				const splitData = newData.map(data => data.split('='));
				const dataJSONObj = Object.fromEntries(splitData);

				console.log(dataJSONObj);

				res.setHeader('Content-Type', 'application/json');
				res.end(JSON.stringify(dataJSONObj));
			});
		}
	}
});

server.listen(port, () => console.log(`Server läuft auf ${ port }`));

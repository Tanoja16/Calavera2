const express = require('express');
const app = express();

app.use('../MN', express.static((__dirname+'../MN')));

// Constants
const PORT = 3000;
//const HOST = '0.0.0.0';

//ROUTE
// app.get('/', (req, res) => {
//   res.send('Hello world\n');
// });

app.get('/', (req, res) => {
	res.sendFile(__dirname+'/mn_attractions.html');
});



//app.listen(PORT, HOST);
//console.log(`Running on http://${HOST}:${PORT}`);

app.listen(PORT,function(){
	console.log("Server running and listening in port " + PORT);
});

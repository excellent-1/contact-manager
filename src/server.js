//Setup express server to run Angular 15 App on Heroku
const express = require('express');
const path = required('path');
const app = express();

//Serve only that static files from the dist directory
app.use(express.static(___dirname + '/dist/contact-manager'));
app.get('/*', (request, response) => {
    response.sendFile(path.join(___dirname + '/dist/contact-manager/index.html'));
});
   
//Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
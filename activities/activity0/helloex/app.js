const express = require('express');
const app = express();
const port = 3000;

// Define a route at "/"
app.get('/', (req, res) => res.send('Hello from nodemon, updated message!'));
// Start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
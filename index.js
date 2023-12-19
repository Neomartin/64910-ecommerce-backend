const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(`Endpoint llamado`)
    res.send('Hello World!');
})

app.listen(3000, () => {
    console.log('Server is running at port 3000');
})
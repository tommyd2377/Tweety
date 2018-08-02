const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello tweety!');
})

app.listen(PORT, () => 
    console.log(`Tweety is listening on port ${PORT}!`));

const express = require('express');
const app = express();

app.get(/\/user(name)?/, (req, res) => {
    res.send('Matching /user or /username');
});
app.get((req, res) => {
    res.status(404).send('404 - Not Found');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

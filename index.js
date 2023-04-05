const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))

app.post('/hook', (req, res) => {
  let text = req.body.text;
  console.log(text)
  res.sendStatus(200)
});


const express = require('express');

const app = express();
const PORT = 3000 || process.env.PORT;

app.get('/', (req, res) => {
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log('Server is running');
});

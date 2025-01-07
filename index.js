const express = require('express');
const app = express();

app.use(express.json());

// Webhook endpoint
app.post('/webhook', (req, res) => {
  console.log('Webhook triggered:', req.body);
  res.status(200).send({ message: 'Webhook received successfully' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
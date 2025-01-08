const express = require('express');
const app = express();

app.use(express.json());

// Webhook for user-related events
app.post('/user-webhook', (req, res) => {
  const { event, data } = req.body;
  console.log('User Webhook Event:', event, data);
  res.status(200).send({ message: `User event ${event} processed` });
});

// Webhook for product-related events
app.post('/product-webhook', (req, res) => {
  const { event, data } = req.body;
  console.log('Product Webhook Event:', event, data);
  res.status(200).send({ message: `Product event ${event} processed` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
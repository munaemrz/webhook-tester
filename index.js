const express = require('express');
const app = express();

app.use(express.json());

// Webhook for template-related events
app.post('/template-webhook', (req, res) => {
  const { event, data } = req.body;

  if (!event || !data) {
    console.error('Invalid payload received for template webhook');
    return res.status(400).send({ message: 'Invalid payload for template webhook' });
  }

  console.log('Template Webhook Event:', event, data);
  res.status(200).send({ message: `Template event ${event} processed` });
});

// Webhook for label-related events
app.post('/label-webhook', (req, res) => {
  const { event, data } = req.body;

  if (!event || !data) {
    console.error('Invalid payload received for label webhook');
    return res.status(400).send({ message: 'Invalid payload for label webhook' });
  }

  console.log('Label Webhook Event:', event, data);
  res.status(200).send({ message: `Label event ${event} processed` });
});

// Fallback for unknown routes
app.use((req, res) => {
  res.status(404).send({ message: 'Route not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
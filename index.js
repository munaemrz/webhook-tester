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

// Webhook for audit-related events
app.post('/audit-webhook', (req, res) => {
  const { event, data } = req.body;

  if (!event || !data) {
    console.error('Invalid payload received for audit webhook');
    return res.status(400).send({ message: 'Invalid payload for audit webhook' });
  }

  console.log('Audit Webhook Event:', event, data);
  res.status(200).send({ message: `Audit event ${event} processed` });
});

// Fallback for unknown routes
app.use((req, res) => {
  res.status(404).send({ message: 'Route not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
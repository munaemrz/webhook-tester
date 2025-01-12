const express = require('express');
const app = express();

app.use(express.json());

app.post('/template-webhook', (req, res) => {
  const { event_type, details, user_id, workspace_id, timestamp } = req.body;

  if (!event_type || !details || !user_id || !workspace_id || !timestamp) {
    console.error('Invalid payload received for template webhook');
    return res.status(400).send({ message: 'Invalid payload for template webhook' });
  }

  console.log('Template Webhook Event:', {
    event_type,
    details,
    user_id,
    workspace_id,
    timestamp,
  });
  res.status(200).send({ message: `Template event ${event_type} processed` });
});

app.post('/label-webhook', (req, res) => {
  const { event_type, details, user_id, workspace_id, timestamp } = req.body;

  if (!event_type || !details || !user_id || !workspace_id || !timestamp) {
    console.error('Invalid payload received for label webhook');
    return res.status(400).send({ message: 'Invalid payload for label webhook' });
  }

  console.log('Label Webhook Event:', {
    event_type,
    details,
    user_id,
    workspace_id,
    timestamp,
  });
  res.status(200).send({ message: `Label event ${event_type} processed` });
});

app.use((req, res) => {
  res.status(404).send({ message: 'Route not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
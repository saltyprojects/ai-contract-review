const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, company, message } = req.body;
  
  // For now, just log it. In production, would send email or save to DB
  console.log('Contact form submission:', {
    name,
    email,
    company,
    message,
    timestamp: new Date().toISOString()
  });
  
  res.json({ success: true, message: 'Thanks for your interest! We\'ll be in touch soon.' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`AI Contract Review running on port ${port}`);
});

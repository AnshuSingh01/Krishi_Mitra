const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const OPENAI_API_KEY = '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';

app.post('/api/openai', async (req, res) => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();

    // Log the full response for debugging
    if (!response.ok) {
      console.error('OpenAI API error:', data);
    }

    res.status(response.status).json(data);
  } catch (err) {
    console.error('Proxy server error:', err);
    res.status(500).json({ error: { message: err.message } });
  }
});

app.listen(3001, () => console.log('OpenAI proxy running on http://localhost:3001')); 
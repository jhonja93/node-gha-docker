const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    ok: true,
    message: 'Hello from Node + Docker + GitHub Actions! NEW TEST!!',
    timestamp: new Date().toISOString(),
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

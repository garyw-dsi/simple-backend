const express = require('express');
const db = require('./db');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Simple Backend with PostgreSQL');
});

app.get('/db-test', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

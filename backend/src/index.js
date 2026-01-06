require('dotenv').config();
const express = require('express');
const { connectDB } = require('./db');
const { corsHandler } = require('./middleware/corsHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(corsHandler);
app.use(express.json());

app.get('/', (req, res) => res.json({ status: 'ok' }));

const snippetRoutes = require('./routes/snippet');
app.use('/api/snippets', snippetRoutes);

async function start() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

start().catch(err => {
  console.error('Failed to start server', err);
  process.exit(1);
});
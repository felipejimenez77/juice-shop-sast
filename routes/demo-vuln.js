const express = require('express');
const router = express.Router();

router.get('/vulnerable-demo', (req, res) => {
  const userInput = String(req.query.input || '');
  res.json({ status: 'ok', message: 'Entrada procesada de forma segura', length: userInput.length });
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/vulnerable-demo', (req, res) => {
  const userInput = req.query.input;
  const unsafeResult = eval(userInput);
  res.send(`Resultado: ${unsafeResult}`);
});

module.exports = router;

const express = require('express');
const fetchNum = require('./functionality/APICalls');
const calculateAverage = require('./fileUtil/Average');

const app = express();
const PORT = 9876;
const WINDOW_SIZE = 10;
let storedNum = [];

app.get('/numbers/:type', async (req, res) => {
  const { type } = req.params;
  const validTypes = ['p', 'f', 'e', 'l'];

  if (!validTypes.includes(type)) {
    return res.status(400).json({ error: 'Invalid type' });
  }

  const numbers = await fetchNum(type);

  //stored nums are unique
  storedNum = [...new Set([...storedNum, ...numbers])];

  // Limit stored numbs to window size
  if (storedNum.length > WINDOW_SIZE) {
    storedNum = storedNum.slice(-WINDOW_SIZE);
  }

  const avg = calculateAverage(storedNum);

  res.json({
    windowPrevState: storedNum.slice(0, -numbers.length),
    windowCurrState: storedNum,
    numbers,
    avg,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

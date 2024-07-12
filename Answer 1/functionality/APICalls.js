const axios = require('axios');

const ApiURLs = {
  p: 'http://20.244.56.144/test/primes',
  f: 'http://20.244.56.144/test/fibo',
  e: 'http://20.244.56.144/test/even',
  l: 'http://20.244.56.144/test/rand',
};

const fetchNum = async (type) => {
  try {
    const response = await axios.get(ApiURLs[type], { timeout: 500 });
    return response.data.numbers;
  } catch (error) {
    console.error('fetching numbers:', error.message);
    return [];
  }
};

module.exports = fetchNum;

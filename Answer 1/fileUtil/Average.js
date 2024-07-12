const Avg = (nums) => {
    if (nums.length === 0) return 0;
    const SUM = nums.reduce((acc, num) => acc + num, 0);
    return (SUM / nums.length).toFixed(2);
  };
  
  module.exports = Avg;
  
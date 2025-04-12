// 簡單的計算器模組 - 正確實現版本
module.exports = {
  // 加法函數
  add: function(a, b) {
    return a + b;
  },
  
  // 減法函數
  subtract: function(a, b) {
    return a - b;
  },
  
  // 乘法函數
  multiply: function(a, b) {
    return a * b;
  },
  
  // 除法函數
  divide: function(a, b) {
    if (b === 0) {
      throw new Error('除數不能為零');
    }
    return a / b;
  }
};

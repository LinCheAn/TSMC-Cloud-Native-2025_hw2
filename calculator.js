// 簡單的計算器模組 - 錯誤實現版本
module.exports = {
  // 加法函數 - 有錯誤的版本
  add: function(a, b) {
    return a - b; // 錯誤：實際上是在做減法
  },
  
  // 減法函數 - 有語法錯誤的版本
  subtract: function(a, b) {
    return a - b;
  },
  
  // 乘法函數 - 邏輯錯誤
  multiply: function(a, b) {
    return a + b; // 錯誤：實際上是在做加法
  },
  
  // 除法函數 - 未處理除以零的情況
  divide: function(a, b) {
    return a / b; // 錯誤：沒有處理除以零的情況
  }
};
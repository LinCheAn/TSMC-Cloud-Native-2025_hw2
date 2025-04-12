// 簡易測試執行器
const fs = require('fs');
const path = require('path');

// 引入計算器模組
const calculatorPath = path.join(__dirname, 'calculator.js');
const calculator = require(calculatorPath);

// 定義測試案例
const tests = [
  { name: '加法測試', func: 'add', args: [2, 3], expected: 5 },
  { name: '減法測試', func: 'subtract', args: [5, 2], expected: 3 },
  { name: '乘法測試', func: 'multiply', args: [3, 4], expected: 12 },
  { name: '除法測試', func: 'divide', args: [10, 2], expected: 5 }
];

// 執行測試
let passedTests = 0;
let failedTests = 0;

for (const test of tests) {
  try {
    const result = calculator[test.func](...test.args);
    if (result === test.expected) {
      console.log(`✅ 通過: ${test.name}`);
      passedTests++;
    } else {
      console.error(`❌ 失敗: ${test.name} - 期望 ${test.expected}，實際得到 ${result}`);
      failedTests++;
    }
  } catch (error) {
    console.error(`❌ 錯誤: ${test.name} - ${error.message}`);
    failedTests++;
  }
}

console.log(`測試完成: ${passedTests} 通過，${failedTests} 失敗`);

// 如果有任何測試失敗，則退出碼為1
if (failedTests > 0) {
  process.exit(1);
} else {
  process.exit(0);
}

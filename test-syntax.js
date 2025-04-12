// 檢查源代碼文件的語法是否正確
const fs = require('fs');
const path = require('path');

// 模擬檢查一個簡單的 JavaScript 文件
try {
  // 讀取 calculator.js 文件
  const filePath = path.join(__dirname, 'calculator.js');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  // 嘗試評估代碼（僅作為語法檢查）
  new Function(fileContent);
  
  console.log('語法檢查通過：calculator.js 沒有語法錯誤');
  process.exit(0); // 成功退出
} catch (error) {
  console.error('語法檢查失敗：', error.message);
  process.exit(1); // 失敗退出
}

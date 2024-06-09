const fs = require('fs');
const path = require('path');

// 定义源文件路径和目标文件路径（这里假设我们要修改原文件）
const sourceFilePath = path.resolve(__dirname, 'proto.js');
const targetFilePath = sourceFilePath; // 或者指定一个新的文件路径，如 'modifiedFile.js'

// 读取原始文件内容
fs.readFile(sourceFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('读取文件时发生错误:', err);
    return;
  }

  // 替换内容
  let modifiedData = data
    .replace('var $protobuf = require("protobufjs/light");', 'import $protobuf from "protobufjs/light";')
    .replace('module.exports = $root;', 'export default $root;');

  // 写入修改后的内容
  fs.writeFile(targetFilePath, modifiedData, 'utf8', (err) => {
    if (err) {
      console.error('写入文件时发生错误:', err);
    } else {
      console.log('文件已成功修改');
    }
  });
});

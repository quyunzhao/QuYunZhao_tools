// 包的入口文件

const { dateFormate } = require("./src/dateFormate");
const { htmlEscape } = require("./src/htmlEscape");
const { htmlUnEscape } = require("./src/htmlUnEscape");

// 暴漏格式化组件
module.exports = {
  dateFormate,
  htmlEscape,
  htmlUnEscape,
};

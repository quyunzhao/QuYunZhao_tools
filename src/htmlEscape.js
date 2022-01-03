// 定义转义字符的方法
/**
 * @param  string  string
 * @since 2022/1/3
 * @version 1.0.0
 * @author QuYunZhao
 */
const htmlEscape = (str) => {
  return str.replace(/<|>|"|&/g, (match) => {
    switch (match) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "&":
        return "&amp;";
    }
  });
};

// 暴漏格式化组件
module.exports = {
  htmlEscape,
};

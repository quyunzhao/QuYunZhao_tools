// 定义反转义字符的方法
/**
 * @param  string  string
 * @since 2022/1/3
 * @version 1.0.0
 * @author QuYunZhao
 */
const htmlUnEscape = (str) => {
  return str.replace(/&lt;|&gt;|&quot;|&amp;/g, (match) => {
    switch (match) {
      case "&lt;":
        return "<";
      case "&gt;":
        return ">";
      case "&quot;":
        return '"';
      case "&amp;":
        return "&";
    }
  });
};

// 暴漏格式化组件
module.exports = {
  htmlUnEscape,
};

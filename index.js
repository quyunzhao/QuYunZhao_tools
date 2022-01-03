// 包的入口文件

// 格式化日期
/**
 * @param  Date  new Date()
 * @since 2022/1/3
 * @version 1.0.0
 * @author QuYunZhao
 */
const dateFormate = (dataStr = new Date()) => {
  const dt = new Date(dataStr);

  const y = dt.getFullYear();

  const m = addZero(dt.getMonth() + 1);

  const d = addZero(dt.getDay());

  const hh = addZero(dt.getHours());

  const mm = addZero(dt.getMinutes());

  const ss = addZero(dt.getSeconds());

  return `${y}/${m}/${d} ${hh}:${mm}:${ss}`;
};

// 补零操作
const addZero = (n) => {
  return n < 9 ? "0" + n : n;
};

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
  dateFormate,
  htmlEscape,
  htmlUnEscape,
};

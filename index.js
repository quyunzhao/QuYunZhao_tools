// 包的入口文件

// 格式化日期
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

// 暴漏格式化组件
module.exports = {
  dateFormate,
};

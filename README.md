# QuYunZhao_tools

工具库

## 安装

```bash
npm install quyunzhao_tools
```

## 导入

```js
const quyunzhao_tools = require("quyunzhao_tools");
```

## 格式化时间

```js
// 调用 dateFormate 格式化时间
const date = quyunzhao_tools.dateFormate(new Date());

console.log(date);
// 结果 2022/01/01 21:43:02
```

## 转义 HTML 中的特殊字符

```js
// 调用 htmlEscape
const str = "<script type='text/javascript'>alert('test')&</script>";

const strEscape = quyunzhao_tools.htmlEscape(str);

console.log(strEscape);
// 结果 &lt;script type='text/javascript'&gt;alert('test')&amp;&lt;/script&gt;
```

## 还原 HTML 中的特殊字符

```js
// 调用 htmlUnEscape
const str =
  "&lt;script type='text/javascript'&gt;alert('test')&amp;&lt;/script&gt;";

const strUnEscape = quyunzhao_tools.htmlUnEscape(str);

console.log(strUnEscape);
// 结果 <script type='text/javascript'>alert('test')&</script>;
```

## 开源协议

ISC

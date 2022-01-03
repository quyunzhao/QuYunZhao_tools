const m = require("../index");
const date = m.dateFormate();
console.log(date);

const str = "<script type='text/javascript'>alert('123') &  </script>";

const strEscape = m.htmlEscape(str);

const strUnEscape = m.htmlUnEscape(strEscape);
console.log(strEscape);
console.log(strUnEscape);

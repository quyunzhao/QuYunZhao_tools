const m = require("../index");
const date = m.dateFormate();
console.log(date);

const str = "<script>alert('ssss') &  </script>";

console.log(m.htmlEscape(str));

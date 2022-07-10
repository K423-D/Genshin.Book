//四舍五入保留2位小数（不够位数，则用0替补）
export function keepTwoDecimalFull(num) {
  var result = parseFloat(num);
  // if (isNaN(result)) {
  // alert('传递参数错误，请检查！');
  // return false;
  // }
  result = Math.round(num * 100) / 100;
  var s_x = result.toString();
  var pos_decimal = s_x.indexOf('.');
  if (pos_decimal < 0) {
    pos_decimal = s_x.length;
    s_x += '.';
  }
  while (s_x.length <= pos_decimal + 2) {
    s_x += '0';
  }
  while (s_x.length < 5) {
    s_x = `0${s_x}`;
  }
  return s_x;
}

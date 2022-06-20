module.exports = function reverse (n) {
  if(n < 0) n = -n; else n = n;
  let arr = n.toString().split('');
  return Number(arr.reverse().join(''));
}

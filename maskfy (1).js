
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

console.log(maskify('567890')); //##7890
console.log(maskify('88')); // 88
console.log(maskify('1erttyu1')); // ####tyui
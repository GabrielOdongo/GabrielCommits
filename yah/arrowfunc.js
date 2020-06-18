// Arrow Function
let array_demo = [];

const zaidiYaMbili = (a, b, c) => {
  array_demo.push(a,b,c);
  console.log("New look array following push operations", array_demo);

  let addByTwo = array_demo.map((e, i) => e + 2);
  return addByTwo;
};

console.log(zaidiYaMbili(3, 8, 1)); 
const util = require ('util')

let id = 1

const fib = (n) => {
  if (n <= 2) return 1;
  return fib (n - 1) + fib (n - 2);
}

const fibInstrumented = (n, s = '', r = 0) => {
  if (n <= 2) {
    return {
      val: 1,
      r, n, s,
      id: id++,
      children: []
    };
  }

  const result1 = fibInstrumented (n - 1, 'l', r + 1);
  const result2 = fibInstrumented (n - 2, 'r', r + 1);

  return {
    val: result1.val + result2.val,
    r, n, s,
    id: id++,
    children: [result1, result2]
  };
}

const fibMemo = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fib2 (n - 1, memo) + fib2 (n - 2, memo);
  return memo[n];
}

const fibMemoInstrumented = (n, memo = {}, side = '') => {
  // console.log (`fib2(${n})`, memo, side)
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fib2 (n - 1, memo, 'l') + fib2 (n - 2, memo, 'r');
  return memo[n];
}

const f = n => n > 1
  ? 12 + ((n - 1) * 13)
  : 12 * n;

// const f = n => 12 * n ** 1.06;

const indent = n => ' '.repeat (f (n));
const getIdForNode = node => `fibL${node.r}${node.s}${String (node.id).padStart(2,0)}`;
const writeNode = node => `${getIdForNode (node)}((${node.n}))`;
const writeDiagram = d => {
  d.children.forEach (node => {
    console.log (`${indent (d.r)}${getIdForNode (d)} --- ${writeNode (node)}`);
  });

  if (d.children.length > 0) {
    writeDiagram (d.children[0]);
    writeDiagram (d.children[1]);
  }
}

// const connectChildrenToParent = parent => {
//   parent.children.forEach (child => child.parent = parent)
//   parent.children.forEach (connectChildrenToParent)
// }

const diagram = fibInstrumented (7)
// connectChildrenToParent (diagram)
// console.log (util.inspect (diagram, {colors: true, depth: Infinity}))
console.log (writeNode (diagram))
writeDiagram (diagram)

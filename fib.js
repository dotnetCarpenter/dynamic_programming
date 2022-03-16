'use strict'

let fib = n => {
  console.log (`fib(${n})`)
  return n < 3
    ? 1
    : fib (n - 1) + fib (n - 2)
}

let memo = (f, o = {}) => (
   a => {
    console.log (o)
    return a in o
      ? o[a]
      : (o[a] = f (a), o[a])
  }
)

// #region memo2
let memo2 = f => {
  const o = {};
  return a => {
    let m = o[a];
    if (m) { return m; }
    else {
      m = f (a);
      o[a] = m;
      return m;
    }
  }
}
// #endregion

// console.log (fib (7)) // -> 13

console.log (fib2 (8))

// fib = memo (fib)
// console.time ('fib')
// console.log (fib (8))
// // console.log (fib (50)) // -> 12586269025
// console.timeEnd ('fib')


// fib2 (10)
// console.time ('fib2')
// console.log (fib2 (50)) // -> 12586269025
// console.timeEnd ('fib2')

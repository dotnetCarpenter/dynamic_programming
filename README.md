# Dynamic Programming

Learn to Solve Algorithmic Problems & Coding Challenges:
https://youtu.be/oBt53YbR9Kk

## fibonacci

The recursive fibonacci code can be written like this:

```js
let fib = n => (
  n < 3
    ? 1
    : fib (n - 1) + fib (n - 2)
)
````

```
fib (7) -> 13
```

```mermaid
graph TB

fibL025((7))
fibL025 --- fibL1l15((6))
fibL025 --- fibL1r24((5))
            fibL1l15 --- fibL2l09((5))
            fibL1l15 --- fibL2r14((4))
                         fibL2l09 --- fibL3l05((4))
                         fibL2l09 --- fibL3r08((3))
                                      fibL3l05 --- fibL4l03((3))
                                      fibL3l05 --- fibL4r04((2))
                                                   fibL4l03 --- fibL5l01((2))
                                                   fibL4l03 --- fibL5r02((1))
                                      fibL3r08 --- fibL4l06((2))
                                      fibL3r08 --- fibL4r07((1))
                         fibL2r14 --- fibL3l12((3))
                         fibL2r14 --- fibL3r13((2))
                                      fibL3l12 --- fibL4l10((2))
                                      fibL3l12 --- fibL4r11((1))
            fibL1r24 --- fibL2l20((4))
            fibL1r24 --- fibL2r23((3))
                         fibL2l20 --- fibL3l18((3))
                         fibL2l20 --- fibL3r19((2))
                                      fibL3l18 --- fibL4l16((2))
                                      fibL3l18 --- fibL4r17((1))
                         fibL2r23 --- fibL3l21((2))
                         fibL2r23 --- fibL3r22((1))
```

```
O(2ⁿ) time
O(n) space
```

### memorization fibonacci

```js
let fib2 = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fib2 (n - 1, memo) + fib2 (n - 2, memo);
  return memo[n];
}
```

```
fib (8) -> 21
```

```mermaid
graph TB
fib2((8))

fib2 --- fib27l((7))
         fib27l --- fib26l((6))
                    fib26l --- fib25l((5))
                               fib25l --- fib24l((4))
                                          fib24l --- fib23l((3))
                                                     fib23l --- fib22l((2))
fib2 --- fib26r((6))
         fib27l --- fib25r((5))
                    fib26l --- fib24r((4))
                               fib25l --- fib23r((3))
                                          fib24l --- fib22r((2))
                                                     fib23l --- fib21r((1))
```

```
O(n) time
O(n) space
```

A generic memoization function that can decorate a monadic
function, that is a function that takes one argument, can be
written like so:

```js
let memo = (f, o = {}) => (
  a => (
    a in o
      ? o[a]
      : (o[a] = f (a), o[a])
  )
)
```

Used to re-write `fib` looks like this:

```js
fib = memo (fib)
```

```
fib (8) -> 21
```

```mermaid
graph TB
fib((8))

fib --- 1rec1((7))
        1rec1 --- 2rec1((6))
                  2rec1 --- 3rec1((5))
                            3rec1 --- 4rec1((4))
                                      4rec1 --- 5rec1((3))
                                                5rec1 --- 6rec1((2))
                                                5rec1 --- 6rec2((1))

fib --- 1rec2((6))
```

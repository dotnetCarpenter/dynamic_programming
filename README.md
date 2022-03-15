# Dynamic Programming

Learn to Solve Algorithmic Problems & Coding Challenges:
https://youtu.be/oBt53YbR9Kk

## fibonacci

```js
const fib = n => (
  n < 3
    ? 1
    : fib (n - 1) + fib (n - 2)
)
````

```
fib (7) -> 13
```

```mermaid
graph
start((7))
start --- 1rec1((6))
          1rec1 --- 2rec1((5))
          1rec1 --- 2rec2((4))
                    2rec1 --- 3rec1((4))
                    2rec1 --- 3rec2((3))
                    2rec2 --- 3rec3((3))
                    2rec2 --- 3rec4((2))
                              3rec1 --- 4rec1((3))
                              3rec1 --- 4rec2((2))
                              3rec2 --- 4rec3((2))
                              3rec2 --- 4rec4((1))
                              3rec3 --- 4rec5((2))
                              3rec3 --- 4rec6((1))
                                        4rec1 --- 5rec1((2))
                                        4rec1 --- 5rec2((1))

start((7))
start --- 1rec2((5))
          1rec2 --- 2rec3((4))
          1rec2 --- 2rec4((3))
                    2rec3 --- 3rec5((3))
                    2rec3 --- 3rec6((2))
                    2rec4 --- 3rec7((2))
                    2rec4 --- 3rec8((1))
                              3rec5 --- 4rec7((2))
                              3rec5 --- 4rec8((1))
```

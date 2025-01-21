# React useEffect setInterval Closure Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook and `setInterval`. The bug arises from an incorrect use of closures within the `setInterval` callback, leading to unexpected behavior. 

## Bug Description

The `bug.js` file contains a component that uses `useEffect` to set up an interval. The intent is to increment a counter every second. However, due to the closure over `count`, the interval always uses the latest value of `count`, resulting in unexpected jumps instead of a smooth increment. 

## Solution

The `bugSolution.js` file demonstrates the correct approach. To fix this, we use a functional update to `setCount`, ensuring that the correct value is always used.
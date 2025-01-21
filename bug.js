```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a closure here. The function returned by setInterval
    // will always have the latest value of 'count' from the component's scope,
    // not the value at the time it was created.
    const intervalId = setInterval(() => {
      setCount(count + 1); // This will update the value with the latest value.
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```
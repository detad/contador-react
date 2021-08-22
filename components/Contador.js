const Counter = () => {
    const [counter, setCounter] = React.useState(0);
    // console.log(counter);
    const increase = () => setCounter(counter + 1);
    const decrease = () => setCounter(counter - 1);
    return (
    <div>
        <h1 className = {counter < 0 ? "menor" : "mayor"}>Counter: { counter }</h1>
        <hr />
        <button onClick = {increase}>Increase</button>
        <button onClick = {decrease}>Decrease</button>
    </div>
    )
};
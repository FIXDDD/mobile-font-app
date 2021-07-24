/* @jsx React.DOM **/
const Counter = (props) =>  {
    const [count, setCount] = React.useState(0)

    const add = (e) =>{
        setCount(count + 1)
    }

    const minus = (e) =>{
        setCount(count - 1)
    }

    const change = (e) =>{
        setCount(e.target.value)
    }

    return (
        <div>
            <button onclick={minus}>-</button>
            <input tpye="text" value={count} onChange={change}/>
            <button onclick={add}>+</button>
        </div>
    )
}

const App = (props) =>{
    return (
        <>
        <Counter />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))

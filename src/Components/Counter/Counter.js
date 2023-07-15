import React,{useState}from 'react'

function Counter() {
    const[count,setCount] = useState(0)

    function decrementCount(){
        setCount(prevCount => prevCount-1)
    }
    function increment() {
        setCount(preavCount => preavCount+1)
        console.log('Incremented');
    }
 function ddd(){
        console.log('hello ddd');
    }

  return (
    <div>Counter
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        <button onClick={ddd}>+</button>
    </div>
  )
}
export function ddd() {

};
export default Counter
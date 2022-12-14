import React from 'react'
import './CounterComponent.css';
import '../index.css';

const CounterComponent = ({ count, setCount }) => {
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if(count === 0){
            alert('Count cannot be less than 0')
            return
        }
        setCount(count - 1)
    }
    const goBackToZero = () => {
        setCount(0)
    }
    return (
        <div className='container my-5 w-50 h-50'>
            <div className=' text-center my-5'>
                <div className="card-body">
                   <h1 className='heading mt-0' id='header'>Counter<span> App</span></h1>
                    
                    <div className='my-5'>
                        <h2 id='zero'>{count}</h2> <br/><br/> 
                        <button className='btn btn-success mx-3' id='button' onClick={increment}>Increment</button> <br></br>
                        <button className='btn btn-danger mx-3' id='button' onClick={decrement}>Decrement</button>
                        {count>=10 && <><br /><br /><button className='btn btn-primary mx-3 my-3' id='button' onClick={goBackToZero}>Go To 0</button></>}
    
                    </div>
                </div>
            </div>
        </div>
      )
    // return(
    //     <div className='container'>
    //     Count: {count}
    //     <br />
    //     <br />
    //     <button onClick={increment}>Increment</button>
    //     <br />
    //     <br />
    //     <button onClick={decrement}>Decrement</button>
    //     <br />
    //     <br />
    //     {count > 10 && <button onClick={goBackToZero}>Go back to 0</button>}
    //   </div>
    // )
}
export default CounterComponent
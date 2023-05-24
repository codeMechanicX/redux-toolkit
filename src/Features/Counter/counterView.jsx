import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './CounterSlice';

const Counterview = () => {
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Count:{count}</h2>
            <button onClick={()=>{dispatch(increment())}}>Increment</button>
            <button onClick={()=>{dispatch(decrement())}}>Increment</button>
            <button onClick={()=>{dispatch(reset())}}>reset</button>
        </div>
    );
};

export default Counterview;
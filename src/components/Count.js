import React, {useContext} from 'react'
import { CountContext } from '../contexts/countContext';

const Count = () => {
    const{count, dispatch}= useContext(CountContext)

    const theme = count > 10? 'text-primary': 'text-secondary'
    return ( 
        <div>
            <p className={`h1 text-center mb-4 ${theme}`}>{count}</p> 

            <div className="buttons d-flex jusitfy-center text-center">
                <button className="btn btn-dark mr-3" onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
                <button className="btn btn-dark" onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
            </div>
        </div>
       
     );
}
 
export default Count;
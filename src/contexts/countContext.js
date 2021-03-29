import React, {createContext, useReducer, useState} from 'react'
import { countReducer } from '../reducers/countReducer';

export const CountContext = createContext()
const CountContextProvider = (props) => {

    const[count , dispatch] = useReducer(countReducer,0)
    const[colors, setColors] = useState({
        primary:{color:'text-primary'},
        secondary:{color:'text-secondary'}
        }
    )
    return ( 
        <CountContext.Provider value={{count, dispatch, colors}}>
            {props.children}
        </CountContext.Provider>
     );
}
 
export default CountContextProvider;
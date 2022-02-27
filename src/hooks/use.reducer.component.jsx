import React,{useReducer} from "react";

const Increment = () =>{
    const[sum,dispatch] = useReducer( (state,action ) => state+action ,0)
    return(
        <>
        {sum}
        <button onClick={ () => dispatch(1)}>Increment By 1</button>
    
        
        </>
    )
}
export default Increment;
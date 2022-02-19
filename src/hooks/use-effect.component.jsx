// import libraries
// create a fun component
// 
import React,{useState,useEffect} from "react";
import {StyledContainer,CounterDiv,IncrementButton,DecrementButton} from './styles.js';

const UseEffectComponent = () => {
    const [incCounter,setIncCounter] = useState(0);
    const [decCounter,setDecCounter] = useState(0);
    useEffect( () => {
        document.title = `Inc Times ${incCounter}, Dec ${decCounter} Times`
    })

    return(
        <>
            <StyledContainer>
                Counter App -- useEffect Hook - StyledComponents
                <CounterDiv>
                    Total Clicks {incCounter + decCounter}. Incremented {incCounter} Times. Decremented {decCounter} Times
                </CounterDiv>
                
                <IncrementButton onClick={ () => setIncCounter(incCounter + 1)}>Increment</IncrementButton>
                <DecrementButton onClick={ () =>  ((incCounter -decCounter) > 0) ? (setDecCounter(decCounter+1)) : ''}>Decrement</DecrementButton>
            </StyledContainer>
        </>
    )
}
export default UseEffectComponent;
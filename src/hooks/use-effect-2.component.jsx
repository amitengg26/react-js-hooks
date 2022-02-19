import React,{useState,useEffect} from "react";
import {StyledContainer,CounterDiv,IncrementButton} from './styles.js';
const UseEffectTwoComponent = () =>{
    const [counter,setCounter] = useState(0)
    useEffect( () => {
        console.log("Rendered while mounting");
    },[counter])

    return(
        <>
            <StyledContainer>
                Counter App -- useEffect Hook with Dependency - StyledComponents
                <CounterDiv>
                    Component will render while mounting only. In console, Rendered while mounting is logged. If no Dependency is added then in console, Rendered while mounting is logged everytime click action is performed
                </CounterDiv>
                
                <IncrementButton onClick={ () => setCounter(0)}>Set same state again</IncrementButton>
                
            </StyledContainer>
        </>
    )
}
export default UseEffectTwoComponent;
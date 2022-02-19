import React,{useState} from 'react';

import {StyledContainer,CounterDiv,IncrementButton,DecrementButton} from './styles.js';

const UseStateComponent = () => {
    const [counter, setCounter] = useState(0)
    return (    
        <>
            <StyledContainer>
                Counter App -- useState Hook - StyledComponents
                <CounterDiv>
                    {counter}
                </CounterDiv>
                <IncrementButton onClick={ () => setCounter(counter + 1)}>Increment</IncrementButton>
                <DecrementButton onClick={ () =>  (counter > 0) ? setCounter(counter - 1) : 0}>Decrement</DecrementButton>
            </StyledContainer>
        </>
    )    
}

export default UseStateComponent;

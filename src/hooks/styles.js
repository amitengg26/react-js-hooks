import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 300%;
    position: absolute;
    width: 100%;
    height: 100%;
    top: -15%;
`;
export const CounterDiv = styled.div` font-size: 120%;
position: relative;
top: 10vh`;

export const IncrementButton = styled.button`font-size: 60%;
position: relative;
top: 20vh;
margin-right: 5px;
background-color: green;
border-radius: 8%;
color: white;
padding: 15px 32px;
`;

export const DecrementButton = styled.button`font-size: 60%;
position: relative;
top: 20vh;
margin-right: 5px;
background-color: red;
border-radius: 8%;
color: white;
padding: 15px 32px;
`;

// export default StyledContainer;
// export default CounterDiv;
// export default IncrementButton;
// export default DecrementButton;
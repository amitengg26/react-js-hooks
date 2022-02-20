import React, { useState } from "react";
// import UseStateComponent from "./hooks/use-state.component";
// import UseEffectComponent from "./hooks/use-effect.component";
// import UseEffectTwoComponent from './hooks/use-effect-2.component'
import Post from "./hooks/PostComponent"
const App = () =>{
  const [show, setShow] = useState(false);
  const showPost = () => {
    // toggles posts onclick of button
    // or we can say unmounts the component
    // when fetch API returns response and there the component on which state is to be set is unmounted then error is something like this.....stating that trying to set state on unmounted component. It can lead to memory leak. Do cleanup in useeffect.
    
    // console.log(show)
    setShow(!show);
  };
  console.log(show)
  return (
    <div className="App">
      {/* <UseStateComponent /> */}
      {/* <UseEffectComponent /> */}
      {/* <UseEffectTwoComponent/> */}
      <button onClick={showPost}>Show Posts</button>      
      { show ? <Post /> :''}
    </div>
  );
}

export default App;

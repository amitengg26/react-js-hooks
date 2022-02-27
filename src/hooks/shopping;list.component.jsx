import React,{useRef,useReducer} from "react";

const Shoppinglist = () =>{
    const inputRef = useRef();
    const [items,dispatch] = useReducer( (state,action) => {
        console.log('action',action)
        switch(action.type){
            case 'add':
                return[
                    ...state,
                    {
                        id:state.length,
                        name:action.name
                    }
                ]
            case 'remove':
                return state.filter( (_,index) => index!=action.index)
            
            case 'reset':
                return []
            default:
                return state
        }
    },[])

    function handleSubmit(e){
        e.preventDefault();
        dispatch({
            type:'add',
            name:inputRef.current.value
        })
        inputRef.current.value = '';
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} />
            </form>
            {
                items ?
                    <>
                        <button onClick={ () => dispatch({type:'reset'})}>Reset</button>
                        <ul>
                            {items.map( (item,index) => {
                            return  <li key={ item.id }> {item.name} <button onClick={ () => dispatch({type:'remove',index})}>Remove</button></li>
                            })}
                        </ul>
                    </>
                    
                    :
                    ''
            }
            
        </>
    )
}

export default Shoppinglist
import React, { useState, useEffect } from "react";
export default function PostComponent() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    // const CancelToken = axios.CancelToken;
    // const source = CancelToken.source();
    // setTimeout( () =>{
    //     axios.get("https://jsonplaceholder.typicode.com/posts",{
    //         cancelToken : source.token
    //     })
    //     .catch( ( err ) => {
    //         if( axios.isCancelled(err)){
    //             console.log('Successfully Aborted')
    //         }else{

    //         }
    //     })
    // })
    // return () => {
    //     source.cancel();
    // }

    setTimeout( () => {
        fetch("https://jsonplaceholder.typicode.com/posts", { signal: signal })
        .then((res) => res.json())
        .then((res) => setPosts(res))
        .catch((err) => {
            if(err.name === 'AbortError'){
                console.log('Successfully Aborted!')    
            }else{
                setError(err);
            }        
        });
    },3000)
    
    return () => controller.abort();
  }, []);
  return (
    <div>
      {!error ? (
        posts.map((post) => (
          <ul key={post.id}>
            <li>{post.title}</li>
          </ul>
        ))
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}
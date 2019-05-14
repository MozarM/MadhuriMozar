import React from 'react'
// normal js call
//function Greet() {
  // return <h1>Hello Madhuri..</h1>;
//}

export const Greet = (props) =>{
console.log(props);
return (
    <div>
        <h1>Hello {props.name} with ES6 .. </h1>
        {props.children}
    </div>
)
} 
//export default Greet;
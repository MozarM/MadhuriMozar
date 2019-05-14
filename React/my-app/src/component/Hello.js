import React from 'react'

//class Hello extends Components {
  const Hello = () => {
    // return (
    //     <div id='hello' className='dummyClass'>
    //         <h1>Hello Program JSX..</h1>      
    //     </div>
    // )     
   return React.createElement (
       'div', 
       {id : 'Hello',className: 'dummyClass'}, 
       React.createElement('h1',null,'Hello without JSX ')
       );
}

export default Hello
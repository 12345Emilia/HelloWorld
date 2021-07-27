import React from 'react'

const Hello = () => {
    //JXS Component
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello Emilia</h1> 
    //     </div>
    // )
    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello Emilia')
    )
}
export default Hello
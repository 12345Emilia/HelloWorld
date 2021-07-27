import React from 'react'

function Columns() {
    const items = []
    return (        
    <>
        {/* // <React.Fragment> //Use this if you want to pass in key attributes, otherwise use <> </> */}
            {/* // With an Array */}
            {/* {
                items.map( item => (
                    <React.Fragment key ={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            } */}
            <td>Name</td>
            <td>Emilia</td>
        {/* </React.Fragment> */}
        </>
    )
}

export default Columns

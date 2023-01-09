import React from "react";

// function Greet() {
//     return <h1>Hello Rohith</h1>
// }

const Greet = ({name,id,children}) => {
    // console.log(props)
    return (
        <div>
            <h1>Hello {name} your id is {id}</h1>
            {children}
        </div>
    )
}
 
export default Greet
import React from "react";

const Hello = () => {
    // Using JSX
    // return (
    //     <div className = 'dummyClass'>
    //         <h1>Hello Rohith Reddy</h1>
    //     </div>
    // )

    // Without Using JSX
    return React.createElement(
        'div',
        {id: 'Hi',className: 'dummyClass'},
        React.createElement('h1',null,'Hi')
        )
}

export default Hello
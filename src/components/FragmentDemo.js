import React from 'react'
//Fragments let us group list of children elements without adding extra node to the DOM.
function FragmentDemo() {
  return (
    <React.Fragment>
        <h1>
            Fragment Demo
        </h1>
        <p>This is a Fragment Demo component</p>
    </React.Fragment>
  )
}

export default FragmentDemo

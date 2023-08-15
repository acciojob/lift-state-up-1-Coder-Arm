
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  
  function showModalHandler(){
    if(showModal === false) setShowModal(true);
    else setShowModal(false)
  }

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <div className="child">
    <h2>Child Component</h2>
    <button onClick={showModalHandler}>Show Modal</button>
    {showModal && 
         <div>
        <h3>Modal Content</h3>
        <p>This is the modal content</p>
        </div>}
      </div>
      
    </div>
  )
}

export default App

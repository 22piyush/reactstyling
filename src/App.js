import "./App.css"
import React from 'react'

const internalstyle = {
  backgroundColor: "tomato",
  fontSize: "40px",
  padding:"20px",
  color: "white",
}

function App() {
  return (
    <div>
      <h1 className='heading'>Hello Everyone......🙂</h1>
      <h1 style={internalstyle}>Hello Team RTC 🙋‍♂️</h1>
      <h1 style={{  
        backgroundColor: "red",
        fontSize: "40px",
        padding:"20px",
        color: "white",
  }}>Have a Good Day 🤗</h1>
    </div>
  )
}

export default App
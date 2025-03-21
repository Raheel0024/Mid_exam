import React, { useState } from 'react'

export default function TaskList(props) {
    const [task,settask]=useState([])
    const [inp,setinp]=useState("")
    function setsk() {
        settask((prev) => [...prev, inp]);
        setinp("")
      }
      function dlt(){
        settask((prev) => prev.slice(0,-1));
      }
      
  return (
    <div>
    <input type="text" onChange={(e)=>{setinp(e.target.value)}}></input>
    <button onClick={setsk}>Save</button>
    <button onClick={dlt}>Delete</button>

  {task.map((t, i) => (
    <div key={i}>
    <input type="checkbox" />
    <span>{t}</span>
    </div>
  ))}

    </div>
  )
}

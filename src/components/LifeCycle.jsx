import React, { useEffect } from 'react'

const LifeCycle = () => {
    useEffect(() => {
        console.log("useEffect1 Here");
    }, []);

  return (
    <div>
      {console.log("render")}
      <h1>LifeCycle</h1>
    </div>
  )
}

export default LifeCycle

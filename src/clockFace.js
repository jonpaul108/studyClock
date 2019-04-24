import React from 'react';


const ClockFace = ({
  startClock,
  min,
  sec,
  pause
}) => {

  return (
    <div className='wrapper'>
        { min }:{ sec }
        <button onClick={startClock}>start</button>
        <button onClick={pause}>pause</button>
      </div>
  )
}


export default ClockFace;
import React, { useState } from 'react';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';
import { IconContext } from 'react-icons/lib';

const Section = (props) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`border-cyan-50 border-[0.2px] border-opacity-40 rounded-md ${expanded ? 'rounded-bl-3xl border-cyan700' : ''}`}>
      <div className={`p-4 bg-cyan-700 rounded-md flex flex-row justify-between ${expanded ? 'rounded-bl-none rounded-br-none' : ''} `} role="button" onClick={() => setExpanded(prev => !prev)}>
        <span className='font-extrabold'>{props.step}</span>
        <IconContext.Provider value={{ size: '24px' }}>
          { expanded ? <VscTriangleUp /> : <VscTriangleDown /> }
        </IconContext.Provider>
      </div>
      { expanded && (<div className='flex flex-col p-4 mb-4 gap-y-2 transition-all ease-in-out delay-150'>
          {props.children}
        </div>)}
    </div>
  )
}

export default Section
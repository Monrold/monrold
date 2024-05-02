import  { useState } from 'react';

export default function LogicFilterBtns( props) {
  const [displayAll, setDisplayAll] = useState(true);
  const [displayUX, setDisplayUX] = useState(false);
  const [displayBranding, setDisplayBranding] = useState (false);

  const filtradoUx = () => {
    setDisplayAll(false);
    setDisplayUX(true);
    setDisplayBranding(false);
  };

  const filtradoBranding = () => {
    setDisplayAll(false);
    setDisplayUX(false);
    setDisplayBranding(true);
  }

  const All = () => {
    setDisplayAll(true);
    setDisplayUX(false);
    setDisplayBranding(false);
  };

  return (
    <div className='mx-auto w-full flex flex-col items-center'>
      <div className='flex space-x-4 justify-center pb-4 '>
      <button className='text-gray-400 outline outline-1 outline-gray-400 px-3 py-1 rounded-md hover:outline-gray-300 focus:outline-0 focus:ring-1 focus:ring-blue-300'   onClick={All}>
        Todo
      </button>
      <button className='text-gray-400 outline outline-1 outline-gray-400 px-3 py-1 rounded-md hover:outline-gray-300 focus:outline-0 focus:ring-1 focus:ring-blue-300'  onClick={filtradoUx}>
        UX | Frontend
      </button>
      <button className='text-gray-400 outline outline-1 outline-gray-400 px-3 py-1 rounded-md hover:outline-gray-300 focus:outline-0 focus:ring-1 focus:ring-blue-300'  onClick={filtradoBranding}>
        Branding
      </button>
      </div>
      <div className='flex' style={{ display: displayAll ? 'flex' : 'none' }} >
        {displayAll && <div>{props.All}</div>}
      </div>
      <div className='flex' style={{ display: displayUX ? 'flex' : 'none' }}>
        {displayUX && <div>{props.Ux}</div>}
      </div>
      <div className='flex' style={{ display: displayBranding ? 'flex' : 'none' }}>
        {displayBranding && <div>{props.Branding}</div>}
      </div>
    </div>
  );
}
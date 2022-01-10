import React, { useState } from 'react';

const Box = ({ on }) => {
  const [isOnOff, setIsOnOff] = useState(on);

  const toggleOnOff = () => {
    setIsOnOff((prevState) => !prevState);
  };

  const style = {
    backgroundColor: isOnOff ? '#222' : 'transparent',
  };

  return <div style={style} onClick={toggleOnOff} className='box'></div>;
};

export default Box;

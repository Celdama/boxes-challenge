import React from 'react';

const Box = ({ on, toggle }) => {
  const style = {
    backgroundColor: on ? '#222' : 'transparent',
  };

  return <div style={style} onClick={toggle} className='box'></div>;
};

export default Box;

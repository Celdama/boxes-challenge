import React from 'react';

const Box = ({ on }) => {
  const style = {
    backgroundColor: on ? '#222' : 'none',
  };

  return <div style={style} className='box'></div>;
};

export default Box;

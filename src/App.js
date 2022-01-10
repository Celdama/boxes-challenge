import React, { useState } from 'react';
import boxes from './boxes';
import './app.css';

const App = () => {
  const [squares, setSquares] = useState(boxes);

  const squareElements = squares.map(({ id }) => (
    <div key={id} className='box'></div>
  ));

  return (
    <main>
      <h1>Boxes will go here</h1>
      <div className='container'>{squareElements}</div>
    </main>
  );
};

export default App;

import React, { useState } from 'react';
import boxes from './boxes';
import Box from './components/Box';
import './app.css';

const App = ({ darkMode }) => {
  const [squares, setSquares] = useState(boxes);

  const toggle = (id) => {
    setSquares((prevState) => {
      return prevState.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  };

  const squareElements = squares.map(({ id, on }) => (
    <Box key={id} toggle={() => toggle(id)} on={on} />
  ));

  return (
    <main>
      <div className='container'>{squareElements}</div>
    </main>
  );
};

export default App;

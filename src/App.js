import React, { useState } from 'react';
import boxes from './boxes';
import Box from './components/Box';
import './app.css';

const App = ({ darkMode }) => {
  const [squares, setSquares] = useState(boxes);

  const squareElements = squares.map(({ id, on }) => <Box key={id} on={on} />);

  return (
    <main>
      <div className='container'>{squareElements}</div>
    </main>
  );
};

export default App;

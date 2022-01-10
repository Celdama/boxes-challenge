import React, { useState } from 'react';
import boxes from './boxes';
import './app.css';

const App = ({ darkMode }) => {
  const [squares, setSquares] = useState(boxes);

  const styles = {
    backgroundColor: darkMode ? 'transparent' : '#fff',
  };

  const squareElements = squares.map(({ id }) => (
    <div style={styles} key={id} className='box'></div>
  ));

  return (
    <main>
      <div className='container'>{squareElements}</div>
    </main>
  );
};

export default App;

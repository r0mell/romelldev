import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <h1>Hola desde mi nuevo portafolio</h1>
      <p>{count}</p>
      <button type='button' onClick={handleClick}>Incrementar</button>
    </div>
  );
}

export default App;

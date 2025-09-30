import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>State Changer Demo</h1>
      <Counter title="Click Counter" />
    </div>
  );
}

export default App;
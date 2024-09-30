import React from 'react';
import Search from './component/Search';

const App = () => {
  // Data dummy untuk pencarian
  const data = [
    'Apple',
    'Banana',
    'Orange',
    'Grapes',
    'Pineapple',
    'Mango',
    'Watermelon',
    'Strawberry'
  ];

  return (
    <div>
      <h1>Real-Time Search Example</h1>
      <Search data={data} />
    </div>
  );
};

export default App;

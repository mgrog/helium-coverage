import React from 'react';
import ReactDOM from 'react-dom';
// import widget
import HeliumWidget from './widget';

// React bindings
const MyHeliumCoverageWidget = HeliumWidget.driver('react', {
  React: React,
  ReactDOM: ReactDOM,
});

function App() {
  return (
    <div className="App">
      <h1>My App</h1>
      {/* The Widget, as a React component */}
      <MyHeliumCoverageWidget />
    </div>
  );
}

export default App;

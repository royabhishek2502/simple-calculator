import { Routes, Route } from 'react-router-dom';
import './App.css';
import SimpleCalculator from './components/SimpleCalculator/SimpleCalculator';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SimpleCalculator/>} exact />
      </Routes>
    </div>
  );
}

export default App;

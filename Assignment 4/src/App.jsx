import './App.css'
import { useState } from "react";
import Heron from './components/heron.jsx';
import Ambig from './components/ambig.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="calculators">
      <Heron />
      <Ambig />
    </div>
  )
}

export default App

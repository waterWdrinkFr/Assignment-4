import './App.css'
import Heron from './components/heron.jsx';
import Ambig from './components/ambig.jsx';
import Newton from './components/newton.jsx';
import Poly from './components/poly.jsx';

function App() {
  return (
    <div className="calculators">
      <Heron />
      <Ambig />
      <Newton />
      <Poly />
    </div>
  )
}

export default App

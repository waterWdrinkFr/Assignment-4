import './App.css'
import Heron from './components/HeronsFormula.jsx';
import Ambig from './components/AmbiguousCase.jsx';
import Newton from './components/NewtonsMethod.jsx';
import Poly from './components/PolynomialFunction.jsx';

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

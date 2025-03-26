import './App.css'
import Heron from './components/heron';
import Ambig from './components/ambig';

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

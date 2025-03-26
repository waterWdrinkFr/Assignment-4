import './App.css'
import Heron from './components/heron.jsx';
import Ambig from './components/ambig.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="calculators">
      <Heron />
      <Ambig />
    </div>
  )
}

export default App

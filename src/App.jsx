import Home from "./components/Home"
import Welcome from "./components/Welcome"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome />
      <Home />
    </>
  )
}

export default App

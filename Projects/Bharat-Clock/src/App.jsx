import { ClockHeading } from "./components/bharatclockheading"
import { ClockTagline } from "./components/clocktagline"
import { ClockReading } from "./components/clockreading"
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {

  return <>
      <div className="container">
        <ClockHeading/>
      <ClockTagline/>
      <ClockReading/>
      </div>
  </>
}

export default App

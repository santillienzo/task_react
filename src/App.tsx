import { BrowserRouter as Router } from "react-router-dom"
import Header from "./components/Header/Header"
import AppRouter from "./routes/AppRouter"
import './app.css'

function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
        <AppRouter/>
      </Router>
    </div>
  )
}

export default App

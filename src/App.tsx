import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import Logout from './components/Logout'
// import './App.css'
import Login from './components/Login'
import User from './components/User'

function App() {

  return (
    <div className='App'>
      <Container>
        <Login />
        <br />
        <User />
        <br />
        <Logout />
      </Container>
    </div>
  )
}

export default App

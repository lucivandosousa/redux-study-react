import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeUser } from "../redux/userSlice";

export default function Login() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  
  const handleLogin = () => {
    // localStorage.setItem('token', '123456789');
    // window.location.href = '/user';
    dispatch(changeUser({name: username, password: password}));
    setUsername('');
    setPassword('');
  }

  return (
    <Form>
      <h1 className="mt-5">Login</h1>
      <Row className="align-items-center">
        <Col sm={3} className="my-1">
          <Form.Control placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Col>
        <Col sm={3} className="my-1">
          <Form.Control placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Col>
        <Col sm={3}>
          <Button onClick={handleLogin}>Login</Button>
        </Col>
      </Row>
      <hr />
    </Form>
  )
}

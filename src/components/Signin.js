import React, { useRef, useState, useContext } from 'react';
import {Card, Form, Button, Alert} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


export default function Signin() {
  
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [waiting, setWaiting] = useState(false);
  const {signin} = useAuth();
  const navigate = useNavigate();
  const verbose = true;

  
  async function submitHandler(e) {
    e.preventDefault()
    setWaiting(true)
  
    try {
      signin(emailRef.current.value, passwordRef.current.value)
      navigate('/')
    } catch (err){
      setError(verbose ? err.message : 'Failed created the account')
      
    } 
    setWaiting(false)
  }

  return (
    <>
<Card>
<Card.Body>
  <h3 className='text-center mb-2'>Sign In</h3>
  {error && <Alert variant='danger'>{error}</Alert>}
  <Form onSubmit={submitHandler}>
    <Form.Group id='email'>
      <Form.Label>Email</Form.Label>
      <Form.Control type='email' ref={emailRef} required></Form.Control>
    </Form.Group>
    <Form.Group id='password'>
      <Form.Label>Password</Form.Label>
      <Form.Control type='password' ref={passwordRef} required></Form.Control>
    </Form.Group>
    <Button type='submit' className='w-100 mt-2' disabled={waiting}>Sign In</Button>
  </Form>
</Card.Body>
</Card>
<div className='w-100 text-center mt-2'>
  Don't have an account yet ? <Link to='/signup'>Sign Up</Link> instead.
  </div>
  </>);
}
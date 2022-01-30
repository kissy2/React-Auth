import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import {Card, Button, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  
  const {user, logout} = useAuth()
  const [error, setError] = useState('');
  const [waiting, setWaiting] = useState(false);
  const navigate = useNavigate()
  const verbose = true;

  
  function handleLogout(){
      setWaiting(true)
      try {
        logout()
        navigate('/signin')
      } catch (err){
        setError(verbose ? err.message : 'Failed created the account')
    }
      setWaiting(false)


  }

  return (
  <>
    <h2 className='text-center mb-2'>Dashboard</h2>
    {error && <Alert variant='danger'>{error}</Alert>}

  <Card>

      <Card.Body>
     

      <h3 className='text-center mb-2'>Welcome back : {user.username}</h3>
      <h3 className='text-center mb-2'>Email : {user.email}</h3>
      </Card.Body>
  </Card>
  <div className='w-100 text-center mt-2'>
  <Button variant='link' disabled={waiting} onClick={handleLogout}>Log out</Button>
  </div>
  </>)
}

import React from 'react'
import { Container } from 'react-bootstrap';
import Signup from './components/Signup';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AuthProvider from './contexts/AuthContext';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import PrivateRouteDashboard from './components/PrivateRouteDashboard'


function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{maxWidth:"500px"}}>
        <Router>
        <AuthProvider>
          <Routes>
            <Route  path="/signup" element={<Signup/>}></Route>
            <Route  path="/signin" element={<Signin/>}></Route>
            <Route  path="/" element={<PrivateRouteDashboard/>}></Route>
          </Routes>
        </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;

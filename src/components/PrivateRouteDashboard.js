import React from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import Dashboard from './Dashboard';
export default function PrivateRouteDashboard() {
  const { user } = useAuth()
  return user ? <Dashboard/> : <Navigate to='/signin'/>
}

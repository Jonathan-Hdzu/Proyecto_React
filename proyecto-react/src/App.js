import logo from './logo.svg';
import './App.css';
import './components/App.css';
import ListCharacters from './components/ListCharacters';
import Search from './components/Search';
import {useState, useEffect} from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated, logout, user} = useAuth0();

  return (
    <div className="App">
      <Search />
      
    </div>
  );
}

export default withAuthenticationRequired(App);

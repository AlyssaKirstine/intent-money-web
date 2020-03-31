import React from 'react';
import logo from './logo.svg';
import {  BrowserRouter as  Router, Route } from 'react-router-dom'
import './App.css';

import Home from  './pages/Home'
import Signup  from './pages/Signup'
import Login from './pages/Login'
import { AuthProvider } from './Auth'
import PrivateRoute from './PrivateRoute'

// firebase.firestore().collection('transactions').add({
//   title: 'Wendy\'s',
//   date: 45
// })
function App() {
  // React.useEffect(() => {
  //   const  fetchData = async () => {
  //     const db = firebase.firestore()
  //     const data = await db.collection("spells").get()
  //     const spells = data.map(doc => doc.data())
  //   }
  // }, [])
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

import React from 'react';
import {  BrowserRouter as  Router, Route } from 'react-router-dom'
import './App.css';

import withSplashScreen from './components/withSplashScreen';
import Expenses from './pages/Expenses'
import Goals from './pages/Goals'
import Home from  './pages/Home'
import Login from './pages/Login'
import Reports from './pages/Reports'
import Signup  from './pages/Signup'
import { AuthProvider } from './Auth'
import PrivateRoute from './PrivateRoute'

require("regenerator-runtime/runtime");

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
    // <AuthProvider>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          {/* <PrivateRoute exact path="/" component={Home} /> */}
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/expenses" component={Expenses} />
          <Route exact path="/goals" component={Goals} />
          <Route exact path="/reports" component={Reports} />
        </div>
      </Router>
    // </AuthProvider>
  );
}

export default withSplashScreen(App);
// export default App;
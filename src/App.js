import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import { auth } from './firebase';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Orders from './Orders';
import Payment from './Payment';
import { useStateValue } from './StateProvider';

function App() {

  const [{ }, dispatch] = useStateValue()

  useEffect(() => {

    onAuthStateChanged(auth, authUser => {
      // console.log('USER >>>>>>>>>>>>>>>>>>', authUser)

      if (authUser) {
        //the user just logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [dispatch])

  return (
    <BrowserRouter>

      <div className="app">

        {/* Header */}
        {/* Home */}

        <Routes>

          <Route path='/login' element={
            <>
              <Login />
            </>
          }>

          </Route>

          <Route path='/payment' element={
            <>
              <Header />
              <Payment />
            </>
          }>

          </Route>
          <Route path='/orders' element={
            <>
              <Header />
              <Orders />
            </>
          }>

          </Route>


          <Route path='/checkout' element={
            <>
              <Header />
              <Checkout />
            </>
          }>

          </Route>

          <Route path='/' element={
            <>
              <Header />
              <Home />

            </>
          }>
          </Route>
        </Routes>




      </div>
    </BrowserRouter>

  );
}

export default App;

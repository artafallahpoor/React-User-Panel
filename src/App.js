import { useEffect, useState, useCallback } from 'react';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// import my other component
import RegisterForm from './Components/Forms/RegisterForm/RegisterForm'
import Panel from './Components/Panel/Panel';
import LoginForm from './Components/Forms/LoginForm/LoginForm';
import  {Route, Routes} from "react-router-dom"
// import utils
import { getStorage } from './utils/storage';

const App = () => {
  const [toggle, setToggle] = useState('');

  const changeToggle = (toggle) => setToggle(toggle)

  const checkIsInitStorage = () => getStorage('users') && getStorage('users').length !== 0
  console.log()
  const checkUserIsRegister = () => {
    if(checkIsInitStorage() && getStorage('id')){
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    checkUserIsRegister()
  }, [checkUserIsRegister])


  return (
      <Routes>
        <Route
          path="/register"
          exact
          element={<RegisterForm onRegister={checkUserIsRegister} />}
        />
        <Route
          path="/login"
          exact
          element={<LoginForm onRegister={changeToggle} onLogin={checkUserIsRegister} />}
        />
        <Route
          path="/"
          exact
          element={<Panel onLogOut={checkUserIsRegister} />}
        />
      </Routes>
  )
}

export  default App

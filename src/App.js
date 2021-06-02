import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import { createContext ,useState} from 'react';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {{loggedInUser, setLoggedInUser}}>
  <Router>
    <Header/>
    <Switch>
      <Route exact path = "/"><Home/></Route>
      
      <Route path = "/home" ><Home/></Route>
      <Route path = "/login" ><Login/></Route>
    </Switch>
  </Router>
  </UserContext.Provider>
  );
}

export default App;

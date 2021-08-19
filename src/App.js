import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import AddUser from './pages/addUser/addUser';
import EditUser from './pages/editUser/EditUser';

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route path='/adduser' component={AddUser}/>
       <Route path='/edituser/:id' component={EditUser}/>

     </Switch>
    </div>
  );
}

export default App;

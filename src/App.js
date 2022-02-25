import './App.css';
import NavigationBar from './components/navigation-bar/navigation-bar';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Switch>
          <Route exact path='/home' component={HomePage} ></Route>
          <Route exact path='/shop' ></Route>
      </Switch>
    </div>
  );
}

export default App;

import './App.css';
import NavigationBar from './components/navigation-bar/navigation-bar';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import Footer from './components/footer/footer';
import PortfolioPage from './pages/portfolio/portfolio';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Switch>
        <Route exact path='/' component={HomePage} ></Route>
          <Route exact path='/home' component={HomePage} ></Route>
          <Route exact path='/portfolio' component={PortfolioPage}></Route>
          <Route exact path='/contact' component={Contact}></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;

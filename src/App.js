// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from "./components/About";
import Navbar from "./components/Navbar";
import Visitor from "./components/Visitor";
import Error from "./components/Error";
import Footer from "./components/Footer";
import { Route, Switch } from 'react-router-dom';



const App = () =>{

  return (
    <main>
      <Navbar />
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/visitor" component={Visitor} />
          <Route component={Error} />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;

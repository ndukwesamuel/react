
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';

// import BlogDetail from './BlogDetail';








function App() {
  
  return (


      <Router>

        <nav className="nav">
          <Navbar />
        </nav>

        <Switch>


             <Route exact path="/" component={Home} />
            <Route path="/create" component={Create} />
            <Route path="/blogs/:id" component={BlogDetails} />



        </Switch>

      </Router>
  );
}

export default App;

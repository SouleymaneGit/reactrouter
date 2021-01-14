import './App.css';
import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


// import Components
import Homepage from './Components/Homepage'
import Posts from './Components/Posts'
import PostId from './Components/PostId'
import Errorpage from './Components/Errorpage'
import Contact from './Contacts/Contact'
import President from './Contacts/President'
import CEO from './Contacts/CEO'
import Founder from './Contacts/Founder'



class App extends Component {
  render(){
    return ( <Router >
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Posts">Posts</Link>
          </li>
          <li>
            <Link to="/PostId/*"> PostId</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Posts" component={Posts} />
          <Route path="/PostId/*" component={PostId} />
      
          <Route path="/Contact" component={Contact}>          
             <Route path="/President" component={President} />
             <Route path="/CEO" component={CEO} />
             <Route path="/Founder" component={Founder} />
          </Route>

          <Route path="*" component={Errorpage} />

        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;

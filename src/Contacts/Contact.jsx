import React, {Component} from 'react'
import {Route,Router,Link} from 'react-router-dom'
import President from './President'
import CEO from './CEO'
import Founder from './Founder'

class Contact extends Component{
    render(){
        return (

           <div>
             <Router>
               <h1>Founder page</h1>
               <ul>
                   <li><Link to="/President">President</Link></li>
                   <li><Link to="/CEO">CEO</Link></li>
                   <li><Link to="/Founder">Founder</Link></li>
               </ul>
               {this.props.children}
         
            <Route path="/President" component={President} />
             <Route path="/CEO" component={CEO} />
             <Route path="/Founder" component={Founder} />
             </Router> 
           </div>
           
        );
    }
}


export default Contact
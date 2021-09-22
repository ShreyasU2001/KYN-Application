import React, { Component } from 'react';
import AuthService from "../services/auth.service";
import { Switch, Route, Link } from "react-router-dom";

class HeaderComponent extends Component {


constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser:false,
    };
  }


componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  logOut() {
    AuthService.logout();
  }


    render() {
        return (


            <div>
              <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
                  <img src = "data:image/png;base64,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" width="120" height="70"></img>
                <div className="navbar-nav " style={{marginLeft:`10px`}}>

            {this.state.currentUser && (
              <li className="nav-item" style={{width:`100px`}}>
                <Link to={"/dash"} className="nav-link">
                  Dashboard
                </Link>
              </li>
            )}

        {this.state.currentUser==false && (
            <li className="nav-item"style={{width:`100px`}}>
             <a className="nav-link" href="/home">Home</a>
            </li>
        )}


         {this.state.currentUser==false && (
            <li className="nav-item"style={{width:`100px`}}>
             <a className="nav-link" href="/register">Register</a>
            </li>
        )}
        
        {this.state.currentUser==false && (
            <li className="nav-item"style={{width:`100px`}}>
             <a className="nav-link" href="/login">Login</a>
            </li>
        )}
        

      
        {this.state.currentUser && (
                <li className="nav-item text-right"style={{width:`100px`}}>
                    <a href="/about" className="nav-link" >About us</a>
                </li>
        )}
           
           {this.state.currentUser && (
                <li className="nav-item text-right"style={{width:`100px`}}>
                    <a href="/contact" className="nav-link" >Contact us</a>
                </li>
        )}
            {this.state.currentUser && (
                <li className="nav-item text-right"style={{width:`160px`}}>
                    <a href="/terms" className="nav-link" >Terms & Conditions</a>
                </li>
        )}

            {this.state.currentUser && (
                <li className="nav-item text-right"style={{width:`100px`}}>
                    <a href="/stores" className="nav-link" >List Store</a>
                </li>
        )}


      

        {this.state.currentUser && (
                <li className="nav-item text-right"style={{width:`100px`}}>
                    <a href="/login" className="nav-link" onClick={this.logOut}>LogOut</a>
                </li>
        )}
 
        
                        </div>
            
                    </nav>
            </div>
        )
    }
}

export default HeaderComponent



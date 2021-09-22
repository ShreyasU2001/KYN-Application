import React, { Component } from 'react';
import AuthService from "../services/auth.service";
class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.searchStores = this.searchStores.bind(this);
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

 searchStores(){   
    this.props.history.push(`/search`);
}

    render() {
        return (
            <div>
       
            <div>
               <h1 className="text-center" style={{marginTop:`190px`}}>Welcome to KYN {this.state.currentUser.username}</h1>
      

               <h3 className="text-center" style={{marginTop:`50px`, marginBottom:`250px`}}>Thank you for joining us, We will try to provide you with our best services available! </h3>
             
            </div></div>
        );
    }
}

export default Dashboard;
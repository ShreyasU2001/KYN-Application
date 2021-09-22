import React, { Component } from 'react'
import StoreService from '../services/StoreService';
import AuthService from "../services/auth.service";
import FacebookLogin from 'react-facebook-login';  
class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user:false,
            // step 2
            userName:'',
            userPassword: '',
            errorMessage:''
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
       
        this.loginUser = this.loginUser.bind(this);
    }


    loginUser = (e) => {
        e.preventDefault();
        let user = {userName: this.state.userName, userPassword: this.state.userPassword};
        console.log('loginuser => ' + JSON.stringify(user));


        AuthService.login(user).then(() => {
          this.props.history.push("/dash");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            errorMessage: resMessage
          });
        }
      );
        
        
    }
    
    changeUserNameHandler= (event) => {
        this.setState({userName: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({userPassword: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }
    facebookResponse = (response) => {
		localStorage.setItem("user", JSON.stringify(response));
		this.setState({ ...this.state, user: response });
		this.props.history.push("/fbdata");
	};



    render() {
        const componentClicked = () => {     console.log("Clicked!"); };

        const LoginButton = ({ facebookResponse }) => (
            <FacebookLogin
    appId="3956124121172280"
    appSecret="e7cc69cf1376e4683b6466bbd6495188"
    // autoLoad
    fields="name,email,picture"
    onClick={componentClicked}
    callback={facebookResponse} />
        );


        return (


            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                    <h1> Login Here </h1>
                                <div className = "card-body">
                                 {this.state.errorMessage && <div className="alert alert-danger" role="alert"> { this.state.errorMessage } </div> }
                                    <form>


                                        <div className = "form-group">
                                            <label> UserName : </label>
                                            <input placeholder="Enter Your Login Name" name="userName" className="form-control" 
                                                value={this.state.userName} onChange={this.changeUserNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Enter Your Password" name="userPassword" className="form-control" 
                                                value={this.state.userPassword} onChange={this.changePasswordHandler}/>
                                        </div>
                            
                                        <br></br>

                                        <button className="btn btn-success" onClick={this.loginUser}>Login</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                 
                                <div style={{ marginLeft: "0%",  marginTop: "5%" }}>

                                {this.state.user == false && (
                                <LoginButton facebookResponse={this.facebookResponse} />
                                )}    

                                </div>

                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )


    }
}

export default LoginComponent
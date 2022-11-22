import React from 'react';
import './style.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      username:"",
      password:"",
      error:{}
    };
  }
  
  onChange= (e) =>{
    this.setState(
      {
        [e.target.name]:[e.target.value]
      }
    );
  }

  formValidation=()=>{
    const{username,password}=this.state;
    let isValid=true;
    const error={};

    if(!username){
      error.username="enter username";
      isValid=false;
    }
    if(!password){
      error.password="enter password";
      isValid=false;
    }
    this.setState({error});
    return isValid;
  }

  onSubmit= (e) =>{
    e.preventDefault();
    const isValid=this.formValidation();
    if(isValid){
      console.warn("form data",this.state.username,this.state.password);
      this.setState({username:"",password:"",error:{}});
    }
  }
  render() {
    const{username,password,error}=this.state;
    return (
      <React.Fragment>
        <h3>Registration</h3>
        <form onSubmit={this.onSubmit}>

          {Object.keys(error).map((key)=>{
            return<div style={{color:'red'}}key={key}>{error[key]}</div>
             }
          )
       } 
          
          Name: <input type="text" name='username' value={username} onChange={this.onChange.bind(this)}/><br/>
          Password: <input type="password" name='password' value={password} onChange={this.onChange.bind(this)}/><br/>
        <input type="submit" value="login"/>
        </form>
      </React.Fragment>
      
    );
  }
}

export default App;
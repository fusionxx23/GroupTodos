import React, {Component} from 'react';
import fire from './fireConfig/Fire'; 
import Layout from './hoc/layout/layout'; 
class App extends Component {

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if(user) {
        this.setState({user}); 
        localStorage.setItem('user', user.uid); 

      } else {
        this.setState({user: null}); 
        localStorage.removeItem('user'); 
      }
    })
  }
  state = {
    groupMode: false,
    user: {} 
  }
  componentDidMount() {
    this.authListener(); 
  }

  render () {
    return (
      <Layout user={this.state.user} groupMode={this.state.groupMode} setModeGroupHandler={() => this.setModeGroup()}  setModeSingleHandler={() => this.setModeSingle()}>  
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"></link>
      </Layout>
    );
  }
}

export default App;
// https://grouptodo-ec212.firebaseio.com/ Fire base end point; 
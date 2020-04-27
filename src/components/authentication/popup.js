import React,{Component} from 'react';
import './popup.css'; 
import fire from '../../fireConfig/Fire'; 
import Shell from '../../hoc/outer/shell'; 
//styles

class Popup extends Component {
    constructor(props) {
        super(props); 
        this.login = this.login.bind(this); 
        this.signUp = this.signUp.bind(this); 
        this.handleChange = this.handleChange.bind(this); 
    }
    state = {
        email:'', 
        password: '',
        error: {
            occur: false, 
            errorMessage: null
        }
    }
    login(e) {
        let self = this; 
        e.preventDefault(); 
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((u) => {
            console.log('hello'); 
            self.props.loggedIn(); 
        })
        .catch((err) =>{
        
            let error = {occur: true, errorMessage: err.message}; 
            self.setState({error: error})
            console.log(err ); 
        } ); 
        console.log(fire.auth().currentUser + "Current User"); 
    }
    signUp(e) {
        e.preventDefault(); 
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(u => {})
        .catch(err => {console.log(err)})
    }
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        let error = this.state.error.errorMessage; 
        console.log(this.state.error.errorMessage); 
        return (
            <Shell>
            <div className='LoginPopup'>
                <div className='LoginPopup__Container'>
                    <a className='LoginPopup__Xbox' onClick={this.props.popup} href="#">X</a>
                    <h2 className='LoginPopup__Title'>Login</h2>
                    <div className='LoginPopup__Items'>
                        <input className='LoginPopup__Input' name='email' type="text" value={this.state.email} placeholder="Username" onChange={this.handleChange} />
                        <input className='LoginPopup__Input' name='password' type="password" value={this.state.password}  placeholder="Password" onChange={this.handleChange}/>
                        {this.state.error.occur ? <h6 className='LoginPopup__ErrorMessage'>{error}</h6> : null}
                        <button className='LoginPopup__Button' onClick={this.login}>Send</button>
                        <button className='LoginPopup__Submit' type="submit" href="#" onClick={this.signUp}>Sign Up</button>
                    </div>
                </div>
            </div>
            </Shell>
        )
    }

}

export default Popup; 
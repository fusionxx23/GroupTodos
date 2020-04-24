import React,{Component} from 'react';
import './popup.css'; 
import fire from '../../fireConfig/Fire'; 
import Shell from '../../hoc/outer/shell'; 
//styles

class Popup extends Component {
    constructor(props) {
        super(props); 
        this.login = this.login.bind(this); 
        this.handleChange = this.handleChange.bind(this); 
    }
    state = {
        email:'', 
        password: ''
    }
    login(e) {
        e.preventDefault(); 
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((u) => {})
        .catch((err) => console.log(err)); 
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
        return (
            <Shell>
            <div className='LoginPopup'>
                <div className='LoginPopup__Container'>
                    <a className='LoginPopup__Xbox' onClick={this.props.popup} href="#">X</a>
                    <h2 className='LoginPopup__Title'>Login</h2>
                    <div className='LoginPopup__Items'>
                        <input className='LoginPopup__Input' name='email' type="text" value={this.state.email} placeholder="Username" onChange={this.handleChange} />
                        <input className='LoginPopup__Input' name='password' type="password" value={this.state.password}  placeholder="Password" onChange={this.handleChange}/>
                        <button className='LoginPopup__Button' onClick={this.login}>Send</button>
                        <button className='LoginPopup__Submit' type="submit" href="#">Sign Up</button>
                    </div>
                </div>
            </div>
            </Shell>
        )
    }

}

export default Popup; 
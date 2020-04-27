import React, {Component} from 'react'; 
import Popup from '../../components/authentication/popup'; 
import Aux from '../outer/shell'; 
import Navbar from '../../components/navigation/Navbar/navbar'; 
import ModeSwitch from '../../components/navigation/ModeSwitch/ModeSwitch'; 
import SingleMode from '../../containers/mode/SingleMode/SingleMode'; 
import GroupMode from '../../containers/mode/GroupMode/GroupMode'; 
import fire from '../../fireConfig/Fire'; 
class Layout extends Component {
    state = {
        login: {
          popup: false,
          loggedIn: false
        }, 
        user: {
            signedIn: true, 
            user: null
        },
        groupMode: false 
    }
    popupHandler() {
        let login = {
            popup: false 
        }
        if(this.state.login.popup) 
            login = {popup: false}
        if(!this.state.login.popup)
            login = {popup: true}; 
        this.setState({login: login}); 
        console.log(this.state.login); 
    }
    loggedInHandler() {
        let login = {
            popup: false, 
            loggedIn: true
        }
        let user = fire.auth().currentUser; 
        if(user) {
            console.log('in')
            let userObj = {signedIn: true, user: user}
            this.setState({user:userObj, login: login}); 
        } else {
            console.log('out')
            let userObj = {signedIn: false, user: null} 
            this.setState({user:userObj, login: login})
        }
         
    }
    componentWillMount() {
        console.log('Will Mount Ran'); 
        var user = fire.auth().currentUser; 
            if(user) {
                console.log('in')
                let userObj = {signedIn: true, user: user}
                this.setState({user:userObj}); 
            } else {
                console.log('out')
                let userObj = {signedIn: false, user: null} 
                this.setState({user:userObj})
            }
    }
    componentDidMount() {
        console.log('Did Mount Ran'); 
        var user = fire.auth().currentUser; 
        if(user) {
            console.log('in')
            let userObj = {signedIn: true, user: user}
            this.setState({user:userObj}); 
        } else {
            console.log('out')
            let userObj = {signedIn: false, user: null} 
            this.setState({user:userObj})
        }
    }
    setModeSingle() {
        let mode = false; 
        this.setState({groupMode: mode})
    }
    setModeGroup() {
        let mode = true; 
        this.setState({groupMode: mode})  
    }
    render() {
        fire.auth().onAuthStateChanged(user => {if(user) console.log('yes');})
        let loginPopup = null; 
        let mode = <SingleMode user={this.state.user}/>; 
        if(this.state.groupMode){ 
            mode = <GroupMode user={this.state.user}/>; 
        }
        if(this.state.login.popup) loginPopup = <Popup loggedIn={() => this.loggedInHandler()} popup={() => this.popupHandler()}></Popup>; 
        return(
           <Aux>
                <Navbar modeStatus={this.state.groupMode} popup={() => this.popupHandler()}></Navbar>
                <ModeSwitch singleMode={this.setModeSingle.bind(this)} groupMode={this.setModeGroup.bind(this)}/>
                {this.props.children}
                {loginPopup}
                {mode}
           </Aux>
        ); 
    }
}
export default Layout; 
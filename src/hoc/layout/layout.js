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
        }
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
        this.setState({login: login}); 
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
    render() {
        let loginPopup = null; 
        let mode = <SingleMode user={this.state.user}/>; 
        if(this.state.groupMode){ 
            mode = <GroupMode user={this.state.user}/>; 
        }
        if(this.state.login.popup) loginPopup = <Popup loggedIn={() => this.loggedInHandler()} popup={() => this.popupHandler()}></Popup>; 
        return(
           <Aux>
                <Navbar modeStatus={this.props.groupMode} popup={() => this.popupHandler()}></Navbar>
                <ModeSwitch singleMode={this.props.setModeSingleHandler} groupMode={this.props.setModeGroupHandler}/>
                {this.props.children}
                {loginPopup}
                {mode}
           </Aux>
        ); 
    }
}
export default Layout; 
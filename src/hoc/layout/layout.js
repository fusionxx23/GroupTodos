import React, {Component} from 'react'; 
import Popup from '../../components/authentication/popup'; 
import Aux from '../outer/shell'; 
import Navbar from '../../components/navigation/Navbar/navbar'; 
import ModeSwitch from '../../components/navigation/ModeSwitch/ModeSwitch'; 
import SingleMode from '../../containers/mode/SingleMode/SingleMode'; 
import GroupMode from '../../containers/mode/GroupMode/GroupMode'; 
class Layout extends Component {
    state = {
        login: {
          popup: false
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
  
    render() {
        let loginPopup = null; 
        let mode = <SingleMode/>; 
        if(this.state.groupMode) mode = <GroupMode/>; 
        if(this.state.login.popup) loginPopup = <Popup popup={() => this.popupHandler()}></Popup>; 
        return(
           <Aux>
                <Navbar modeStatus={this.props.groupMode} popup={() => this.popupHandler()}></Navbar>
                <ModeSwitch singleMode={this.props.setModeSingleHandler} groupMode={this.props.setModeGroupHandler}/>
                {this.props.children}
                {loginPopup}
           </Aux>
        ); 
    }
}
export default Layout; 
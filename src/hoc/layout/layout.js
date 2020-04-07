import React, {Component} from 'react'; 
import Popup from '../../components/authentication/popup'; 
import Aux from '../outer/shell'; 
import Navbar from '../../components/navigation/navbar'; 




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
        if(this.state.login.popup) loginPopup = <Popup popup={() => this.popupHandler()}></Popup>; 
        return(
           <Aux>
                <Navbar popup={() => this.popupHandler()}></Navbar>
                {this.props.children}
                
                {loginPopup}
           </Aux>
        ); 
    }
}
export default Layout; 
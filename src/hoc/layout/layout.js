import React, {Component} from 'react'; 
import Popup from '../../components/authentication/popup'; 
import Aux from '../outer/shell'; 
import Navbar from '../../components/navigation/navbar'; 
class Layout extends Component {
    state = {
        login: {
          popup: true
        }
    }
    render() {
        let loginPopup = null; 
        if(this.state.login) loginPopup = <Popup></Popup>; 
        return(
           <Aux>
                <Navbar></Navbar>
                {this.props.children}
                {loginPopup}
           </Aux>
        ); 
    }
}
export default Layout; 
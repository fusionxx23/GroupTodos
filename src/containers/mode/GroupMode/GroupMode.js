import React from 'react'; 
import './GroupMode.css'; 
const GroupMode = (props) => {
    console.log('Ran?'); 
    let content = ''; 
    if(props.user.signedIn) {
        content = <div>signedIn</div>
    } else {
        content = <div>Not signed In</div>
    }
    return (
        <div>
             <h1>Hello</h1>
            {content}   
        </div>
  
    )
}

; 

export default GroupMode; 
import React from 'react'; 
import axios from '../../../axios-lists'; 

const SingleMode = (props) => {
    let content = ''; 
    if(props.user.signedIn) {
        content = "signed in"
    } else {
        content = "not signed in"
    }
    return (
        <div>
            {content}
        </div>
    )
}; 

export default SingleMode; 

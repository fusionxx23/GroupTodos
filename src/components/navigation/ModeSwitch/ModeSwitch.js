import React from 'react'; 
import './ModeSwitch.css'; 
const ModeSwitch = (props) => 
    (
        <div className='ModeSwitch'>
           <h4 onClick={props.singleMode} className='ModeSwitch__Selector ModeSwitch__SingleMode'>Single Mode</h4>
           <h4 onClick={props.groupMode} className='ModeSwitch__Selector ModeSwitch__GroupMode'>Group Mode</h4>
        </div>
    )

export default ModeSwitch; 
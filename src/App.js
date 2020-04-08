import React, {Component} from 'react';
import SingleMode from './containers/mode/SingleMode/SingleMode'; 
import GroupMode from './containers/mode/GroupMode/GroupMode'; 
import Layout from './hoc/layout/layout'; 
class App extends Component {

  state = {
    groupMode: false
  }


  render () {
    let mode = <SingleMode/>; 
    if(this.state.groupMode) mode = <GroupMode/>; 
    return (
      <Layout>  
        {mode} 
      </Layout>
    );
  }
}



export default App;

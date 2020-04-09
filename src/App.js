import React, {Component} from 'react';

import Layout from './hoc/layout/layout'; 
class App extends Component {
  state = {
    groupMode: false
  }
  setModeSingle() {

  }
  setModeGroup() {

  }
  render () {
    return (
      <Layout groupMode={this.state.groupMode} setModeGroupHandler={() => this.setModeGroup()}  setModeSingleHandler={() => this.setModeSingle()}>  
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"></link>
      </Layout>
    );
  }
}

export default App;

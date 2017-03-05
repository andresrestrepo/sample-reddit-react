import React, { Component } from 'react';
import './App.css';
import ItemSubReddit from './ItemSubReddit'
//import SelectSubredditModal from './SelectSubredditModal'
import MyNavBar from './MyNavBar'

class App extends Component {
  render() {
    return (
      <div>
        {/*<SelectSubredditModal />*/}
        <MyNavBar />
        <ItemSubReddit />
      </div>
    )
  }
}

export default App;

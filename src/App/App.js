import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import MyNavBar from '../components/shared/MyNavBar/MyNavBar';
import firebaseConnection from '../helpers/data/connection';
import Home from '../components/pages/Home/Home';
import Auth from '../components/pages/Auth/Auth';
import './App.scss';

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
       <MyNavBar authed={authed} />
       <Auth authed={authed} />
      </div>
    );
  }
}

export default App;

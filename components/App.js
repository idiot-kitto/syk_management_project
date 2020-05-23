//import libraries
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import LoginForm from './LoginForm';
import Articles from './Articles';
import auth from '@react-native-firebase/auth';
import Loading from './Loading';

//create a component

class App extends Component {
  state = {
    loggedIn: null,
  };

  componentDidMount() {
    auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loggedIn: true,
        });
      } else {
        this.setState({
          loggedIn: false,
        });
      }
    });
  }

  renderContent = () => {
    console.log(this.state.loggedIn);
    switch (this.state.loggedIn) {
      case false:
        return <LoginForm />;

      case true:
        return <Articles />;

      default:
        return <Loading />;
    }
  };

  render() {
    return <View style={styles.container}>{this.renderContent()}</View>;
  }
}

// define your styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

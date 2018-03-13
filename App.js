import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class GetStarted extends React.Component {

  static color = "blue"

  handlePress = (e)=> {
    console.log("Button clicked!")
  }

  render() {
    return <View>
      <Button style={{color: this.color}} title={this.props.label} onPress={this.handlePress} />
    </View>
  }

}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world!!!!!</Text>
        <GetStarted label="Getting started" />
        <GetStarted label="Cancel" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

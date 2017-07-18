/**
 * Sample Blink page which uses props
 * and stats
 */

 import React, {Component} from 'react';
 import {
   AppRegistry,
   Text,
   View,
   StyleSheet
 } from 'react-native';

class Blink extends Component {
   constructor(props) {
     super(props);
     this.state = {showText: true};

     /* Toggle each 1 sec */
     setInterval(() => {
       this.setState(previousState => {
         return { showText: !previousState.showText };
       });
     }, 1000);
   }

   render() {
     let display = this.state.showText ? this.props.text : '';
     return (
       <Text>{display}</Text>
     );
   }
 }

export default class BlinkApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Blink style={styles.text}
          text='This will be a'/>
        <Blink style={styles.text}
          text='blinking text'/>
        <Blink style={styles.text}
          text='Every 1sec'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

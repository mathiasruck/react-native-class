import React from 'react';
import {Button, Text, View} from 'react-native';

class ExampleComponent3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    console.log("constructor...");
  }

  incrementCount(){
      const newState = {counter: this.state.counter + 1}
      this.setState(newState)
      console.log("incrementCount...");
  }
  componentDidMount(){
    console.log("componentDidMount...");
    return null;
}
  componentDidUpdate(){
      console.log("componentDidUpdate...");
      return null;
  }
  componentWillUpdate(){
    console.log("componentWillUpdate...");
    return null;
}
componentWillUnmount(){
    console.log("componentWillUnmount...");
    return null;
}
  render() {
    console.log("render...");
    return (
      <View>
        <Text style={{fontSize:40, textAlign:"center"}}>{this.state.counter}</Text>
        <Button onPress={() => this.incrementCount()} title="Increment" />
      </View>
    );
  }
}

export default ExampleComponent3;

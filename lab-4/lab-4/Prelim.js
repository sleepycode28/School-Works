
import React, { Component } from "react";
import { Alert, StyleSheet, Text, View, TextInput, Button } from "react-native";

export default class Prelim extends Component {

  constructor(props) {
      super(props)
      this.state = {
        TextInputValue: ['']
      }
  }


  buttonClickListener = () =>{
      const { TextInputValue }  = this.state ;
      Alert.alert(TextInputValue + '  Added Successfully!');
  }


  render() {
    return (
      <View style={styles.container}>    
      <View style={styles.elementContainers}>
        <TextInput
          style={styles.textINPUTS}
          // Adding hint in TextInput using Placeholder option.
          placeholder=" Enter Your  Name"
          //set the value in state.
          onChangeText={TextInputValue => this.setState({TextInputValue})}
          // Making the Under line Transparent.
          //underlineColorAndroid="transparent"
        />
      
        <View style={[{ width: "50%", margin: 15}]}>
          <Button
          onPress={this.buttonClickListener}
          title="Submit"
          color="#63c9a2"
          />
        </View>
        
      </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:40,
    alignItems: "center",
    backgroundColor: "#e5e5e5"
  },
 elementContainers:{
    flexDirection:'column', 
    justifyContent:'space-between',
    alignItems:'center'
},

  textINPUTS:{
  borderColor:'Black',
  fontweight:"Bold",
  justifyContent: 'center',
  borderWidth:2,
  padding:10,
  marginHorizontal:0,
  marginVertical:10,
  borderRadius: 20,
  backgroundColor:"#f2f2f0",
  opacity:.6
}
 
});

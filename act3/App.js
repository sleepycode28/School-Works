import React, {Component } from 'react';
import {ImageBackground, Text, View, StyleSheet, TextInput, Button } from 'react-native';

const image = { uri: "https://thumbs.dreamstime.com/b/online-banking-payment-services-flat-illustrations-mobile-ui-digital-bank-smart-phone-shopping-deposit-transaction-150701390.jpg" };


class App extends Component {
render ()
{
return(


<View style={styles.app}>
<ImageBackground source={image}  style={styles.image}>
<Text style={styles.paragraph}>
        Bank Registration
</Text> 

<Text style={styles.Textone}> Register Now! </Text>
<TextInput style={styles.textStyle} placeholder="Enter Your Full Name" onChangeText={()=>({})}></TextInput>
<TextInput style={styles.textStyle} placeholder="Enter your Full Address" onChangeText={()=>({})}></TextInput>
<TextInput style={styles.textStyle} placeholder="Enter your Birthday " onChangeText={()=>({})}></TextInput>
<TextInput style={styles.textStyle} placeholder="Enter Your Email Address " onChangeText={()=>({})}></TextInput>
<TextInput style={styles.textStyle} placeholder="Enter Your Username" onChangeText={()=>({})}></TextInput>
<TextInput  style={styles.textStyle} secureTextEntry={true}placeholder="Enter Your Password" onChangeText={()=>({})}></TextInput>
<TextInput  style={styles.textStyle} secureTextEntry={true}placeholder="Re-Enter Your Password" onChangeText={()=>({})}></TextInput>
<View style={styles.buttonStyle}>
<Button  title="Send" onPress={()=>{alert("Successfully Login!")}}></Button>
</View>
</ImageBackground>
</View>
//</View>

)
} }


const styles=StyleSheet.create(
{

app:{
  flex: 1,
  backgroundColor:"#f7d2fc",
  flexDirection:"column",
  justifyContent: 'center',
  //marginTop:40,
  //marginBottom:40,
  padding: 10,
},

image: {
  //flex: 1,
  //opacity:.7,
  width:300,
  height:200,
  justifyContent: "center"

},
  
textStyle:{

  borderColor:'Black',
  fontweight:"Bold",
  justifyContent: 'center',
  borderWidth:2,
  padding:5,
  marginHorizontal:10,
  marginVertical:10,
  borderRadius: 20,
  backgroundColor:"#f2f2f0",
  opacity:.6

},

Textone:{
  fontWeight:"Bold",
  color: "blue"
},
paragraph: {
  color: "Black",
  margin: 10,
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
  padding:5
},

buttonStyle:{
  paddingLeft: 30,
  marginHorizontal:30,
  marginVertical:10,
  
}
} )
export default App
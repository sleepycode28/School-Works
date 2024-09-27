import  React, {useState} from 'react';
import{Text, View, StyleSheet, TextInput,Button ,ScrollView} from 'react-native';



export default function App(){

const[enteredGoal,setEnteredGoal]= useState('');
const [courseGoals, setCourseGoals]= useState([]);
const goalInputhandler=(enteredText)=>
{
 setEnteredGoal(enteredText);
};

const addGoalHandler=()=>
{
  setCourseGoals(currentGoals=>[...courseGoals,enteredGoal]);
  alert (enteredGoal +"  Successfull Added!")
};

return(

<View style={styles.container}>

<TextInput style={styles.textINPUTS} placeholder="Student Name" onChangeText={goalInputhandler}></TextInput>
<View style={styles.elementContainers}>
<Button
  
  onPress={addGoalHandler}
  title="SUBMIT"
  color="#61b88b"
  
 />
 </View>

<ScrollView>
<View>
{courseGoals.map((goal)=><Text style={styles.styleItems}>{goal}</Text>)}
</View>
</ScrollView>

</View>
);}

const styles = StyleSheet.create({
container:{
flex:1,
padding:50,
backgroundColor:'#dcf7e9'
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
  padding:5,
  marginHorizontal:10,
  marginVertical:10,
  borderRadius: 20,
  backgroundColor:"#f2f2f0",
  opacity:.6
}
});
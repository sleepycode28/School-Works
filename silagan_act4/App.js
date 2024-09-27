import  React, {useState} from 'react';
import{Text,ImageBackground,View,StyleSheet,TextInput,Button,ScrollView} from 'react-native';



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
};

return(

<View style={styles.container}>
<View style={styles.elementContainers}>
<TextInput placeholder="Enter a task" style ={styles.textINPUTS} onChangeText={goalInputhandler}/>
<Button
  onPress={addGoalHandler}
  title="ADD"
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
flexDirection:'row', 
justifyContent:'space-between',
alignItems:'center'
},


textINPUTS:{
width:"80%",
fontSize:16,
borderBottomWidth:2,
borderBottomColor:"#58826d"
},

styleItems:{
padding:10,
backgroundColor:'#80cfa6'
}

});
import React, { useState } from 'react'
import * as rn from 'react-native'

const FormLogin = () => {
  const [value, setValue] = useState({
    username: '',
    password: ''
  })

  const onPress = () => {
    rn.Alert.alert(JSON.stringify(value))
    setValue({
      username: '',
      password: ''
    })
  }

  return (
    <rn.View style={styles.container}>
      <rn.Text style={styles.titleLogin}>Form Login</rn.Text>
      <rn.View style={styles.form}>
        <rn.TextInput
          style={styles.input}
          placeholder='enter username'
          placeholderTextColor='lightgrey'
          onChangeText={(text) => setValue({ ...value, username: text })}
          value={value.username}
          autoCompleteType='off'
        />
        <rn.TextInput
          style={styles.input}
          placeholder='enter password'
          placeholderTextColor='lightgrey'
          onChangeText={(text) => setValue({ ...value, password: text })}
          value={value.password}
          autoCompleteType='off'
          secureTextEntry
        />
        <rn.View style={styles.button}>
          <rn.Button title='login' color='green' onPress={onPress} />
        </rn.View>
      </rn.View>
    </rn.View>
  )
}

const styles = rn.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    margin: 10
  },
  titleLogin: {
    fontSize: 22,
    textAlign: 'center',
    color: 'black',
    fontWeight: '600'
  },
  form: {
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 5
  },
  input: {
    width: 350,
    height: 40,
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: 'grey',
    borderStyle: 'solid',
    borderRadius: 3
  },
  button: {
    width: 360,
    height: 40,
    padding: 5,
    margin: 5,
    borderRadius: 3
  }
})

export default FormLogin
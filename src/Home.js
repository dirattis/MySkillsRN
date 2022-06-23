import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity
}
  from 'react-native';

export function Home() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Welcome, Diego Rattis</Text>
      <TextInput
        style={style.input}
        placeholder="New skill"
        placeholderTextColor="#555" />

      <TouchableOpacity style={style.button} activeOpacity={.7}>
        <Text style={style.buttonText}>Add</Text>
      </TouchableOpacity>
      <Text style={[style.title, {marginTop: 30}]}>
        My Skills
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS == 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center'
  }, 
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  }

});
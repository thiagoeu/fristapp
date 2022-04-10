import { StatusBar } from 'expo-status-bar';
import { StyleSheet , View } from 'react-native';
import React from 'react';
import Title from './src/components/Title/';
import Form from './src/components/Form';


export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1d1e0',
    paddingTop: 85,
  },
});

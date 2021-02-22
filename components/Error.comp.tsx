import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

interface Props {
    error: string 
}

export default function Error(props:Props) {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: "Marcellus",}}>{props.error}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    backgroundColor: 'rgba(244, 90, 90, 0.72)',
    lineHeight:1,
    padding:10,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
  },
});

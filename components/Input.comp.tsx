import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

interface Props {
  setQuery?:any,
  query:string,
  search:any,
}

export default function Input(props:Props) {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.input}
        placeholder="Enter a city name"
        placeholderTextColor="white"
        onChangeText={(value) => props.setQuery(value)}
        value={props.query}
        onKeyPress={props.search}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    width:'100%',
  },
  input: {
    fontFamily: "MarcellusSC_400Regular",
    backgroundColor:'rgba(104,97,97,.22)',
    borderRadius:10,
    flex: 1,
    marginBottom:5,
    padding: 10,
    fontSize: 12,
    fontWeight:'bold',
    width:'100%',
    color:'#f3f3f3',
  },
});

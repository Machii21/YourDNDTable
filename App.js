import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from "./screens/Home";

export default function App() {
  return (
    <Home />
  );
}

const styles = StyleSheet.create({
  appname: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#D69C9C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

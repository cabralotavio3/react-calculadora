import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Titulo() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>CALCULADORA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#999',
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 20,
  },
});

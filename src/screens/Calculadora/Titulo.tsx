import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Titulo() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Calculadora Simples</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#6200EE',
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

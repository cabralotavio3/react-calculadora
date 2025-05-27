import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface display {
  valor: string;
}

export default function Display({ valor }: display) {
  return (
    <View style={styles.display}>
      <Text style={styles.valor}>{valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    backgroundColor: '#111',
    padding: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  valor: {
    color: '#fff',
    fontSize: 48,
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DisplayProps {
  valor: string;
}

export default function Display({ valor }: DisplayProps) {
  return (
    <View style={styles.display}>
      <Text style={styles.valor}>{valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    backgroundColor: '#000',
    padding: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  valor: {
    color: '#fff',
    fontSize: 48,
  },
});

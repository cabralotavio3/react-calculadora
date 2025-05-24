import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface BotaoProps {
  label: string;
  onPress: () => void;
  flex?: number;
  color?: string;
}

export default function Botao({ label, onPress, flex = 1, color = '#333' }: BotaoProps) {
  return (
    <TouchableOpacity style={[styles.botao, { flex, backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    borderRadius: 8,
  },
  label: {
    fontSize: 24,
    color: '#fff',
  },
});

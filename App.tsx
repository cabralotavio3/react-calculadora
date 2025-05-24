import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Calculadora from './src/screens/Calculadora/Calculadora';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Calculadora />
    </>
  );
}

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Titulo from '../../screens/Calculadora/Titulo';
import Display from '../../screens/Calculadora/Display';
import Botao from '../../screens/Calculadora/Botao';
import { calcular } from '../../services/calculadoraService';

export default function Calculadora() {
  const [valor, setValor] = useState('');

  const adicionar = (texto: string) => setValor(valor + texto);
  const limpar = () => setValor('');
  const calcularResultado = () => setValor(calcular(valor));

  return (
    <View style={styles.container}>
      <Titulo />
      <Display valor={valor} />

      <View style={styles.linha}>
        <Botao label="7" onPress={() => adicionar('7')} />
        <Botao label="8" onPress={() => adicionar('8')} />
        <Botao label="9" onPress={() => adicionar('9')} />
        <Botao label="/" onPress={() => adicionar('/')} />
      </View>
      <View style={styles.linha}>
        <Botao label="4" onPress={() => adicionar('4')} />
        <Botao label="5" onPress={() => adicionar('5')} />
        <Botao label="6" onPress={() => adicionar('6')} />
        <Botao label="*" onPress={() => adicionar('*')}  />
      </View>
      <View style={styles.linha}>
        <Botao label="1" onPress={() => adicionar('1')} />
        <Botao label="2" onPress={() => adicionar('2')} />
        <Botao label="3" onPress={() => adicionar('3')} />
        <Botao label="-" onPress={() => adicionar('-')}  />
      </View>
      <View style={styles.linha}>
        <Botao label="0" onPress={() => adicionar('0')} />
        <Botao label="C" onPress={limpar}  />
        <Botao label="=" onPress={calcularResultado}  />
        <Botao label="+" onPress={() => adicionar('+')}  />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  linha: {
    flexDirection: 'row',
  },
});

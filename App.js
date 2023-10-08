{/*Calculadora de IMC: Desenvolva uma calculadora de Índice de Massa Corporal (IMC) que permita aos usuários 
inserir seu peso e altura, e depois exiba o IMC calculado.   (peso/altura²) */}


import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [calcular, setCalcular] = useState('');

  function Calcular() {
    if (peso && altura) {
      const alturaDigitada = altura / 100;
      const imc = peso / (alturaDigitada * alturaDigitada);

      setCalcular(`IMC: ${imc.toFixed(2)}`);
    } else {
      setCalcular('Preencha peso e altura.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calcular IMC</Text>

      <TextInput
        placeholder="Peso?"
        style={styles.input}
        value={peso}
        onChangeText={(text) => setPeso(text)}
      />

      <TextInput
        placeholder="Altura?"
        style={styles.input}
        value={altura}
        onChangeText={(text) => setAltura(text)}
      />

      <View style={styles.calculadora}>
        <TouchableOpacity onPress={Calcular}>
          <Image
            source={require('./calculadora.png')}
            style={styles.calculadoraBotao}
          />
        </TouchableOpacity>

        <Text style={styles.resultado}>{calcular}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#778899',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  input: {
    width: 150,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    fontSize: 16,
  },
  calculadora: {
    width: 100,
    height: 120,
    marginBottom: 20,
  },
  calculadoraBotao: {
    width: 100,
    height: 120,
    marginBottom: 20,
  },
  resultado: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

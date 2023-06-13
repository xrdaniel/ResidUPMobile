import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

const OcorrenciaDetalhada = ({navigation}) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [textArea, setTextArea] = useState('');

  const handleSubmit = () => {
   navigation.navigate('Ocorrências-Síndico');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formBox}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Ocorrência Detalhada</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={input1}
            onChangeText={setInput1}
            placeholder="Antonio Santos"
            editable={false}
          />
          <TextInput
            style={styles.input}
            value={input2}
            onChangeText={setInput2}
            placeholder="Apto 15"
            editable={false}
          />
          
        </View>
        <TextInput
          style={styles.textArea}
          value={textArea}
          onChangeText={setTextArea}
          placeholder="Meu banheiro está com vazamento de água, o vazamneto está embaixo dp lavatario"
          multiline
          editable={false}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Resolver</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#ccc8c8',
  },
  formBox: {
    backgroundColor: '#6b6969',
    height: 300,
    borderRadius: 15,
  },
  titleContainer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  title: {
    color: 'Black',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    marginLeft: 10,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  textArea: {
    height: 120,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    marginRight: 10,
    marginLeft: 10,
    paddingHorizontal: 8,
    paddingTop: 8,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 15,
    margin: 10,
    alignItems: 'center',
    width: '40%', // Ajuste o tamanho conforme necessário
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default OcorrenciaDetalhada;
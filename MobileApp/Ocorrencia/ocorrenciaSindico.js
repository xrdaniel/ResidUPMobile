import React from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

const OqocorrenciaSindico = ({navigation}) => {

   const handleSubmit = () => {
   navigation.navigate('OcorrenciaDetalhada');
  };


  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Ocorrências dos Moradores</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Titulo:</Text>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Cano quebrado" editable={false}/>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Ver</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Titulo:</Text>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Rachadura na parede" editable={false}/>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Ver</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Titulo:</Text>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Luz piscando" editable={false}/>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Ver</Text>
            </TouchableOpacity>
          </View>
        </View>
        
 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ccc8c8',
  },
  box: {
    backgroundColor: '#6b6969',
    height: 600,
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
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
    marginLeft: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OqocorrenciaSindico;
import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';

const Reserva = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Nova Reserva</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder=" Área" placeholderTextColor='black' />
          <TextInput style={styles.input} placeholder="Horário" placeholderTextColor='black' />
          <TextInput style={styles.input} placeholder="Data" placeholderTextColor='black' />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <Text style={styles.title}>Minhas Reservas</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Churrasqueira" placeholderTextColor='black' editable={false} />
          <TextInput style={styles.input} placeholder="15H as 18H" placeholderTextColor='black' editable={false} />
          <TextInput style={styles.input} placeholder="15/06/2023" placeholderTextColor='black' editable={false} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Piscina" placeholderTextColor='black' editable={false} />
          <TextInput style={styles.input} placeholder="10H as 12H" placeholderTextColor='black' editable={false} />
          <TextInput style={styles.input} placeholder="16/06/2023" placeholderTextColor='black' editable={false} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Quadra de Tênis" placeholderTextColor='black' editable={false} />
          <TextInput style={styles.input} placeholder="14H as 16H" placeholderTextColor='black' editable={false} />
          <TextInput style={styles.input} placeholder="20/06/2023" placeholderTextColor='black' editable={false} />
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
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: 'red',
    height: 200,
    backgroundColor: '#6b6969',
  },
  form: {
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: 'red',
    height: 250,
    backgroundColor: '#6b6969',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  input: {
    flex: 1,
    height: 30,
    color: 'black',
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#04ff00',
    paddingVertical: 6,
    marginTop: 60,
    marginLeft: 250,
    marginRight: 25,
    borderRadius: 15,
    alignItems: 'center',
    width: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Reserva;

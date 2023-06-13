import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';

const Reserva = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Nova Reserva</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder=" Área" />
          <TextInput style={styles.input} placeholder="Horário" />
          <TextInput style={styles.input} placeholder="Data" />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <Text style={styles.title}>Minhas Reservas</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Churrasqueira" editable={false} />
          <TextInput style={styles.input} placeholder="15H as 18H" editable={false} />
          <TextInput style={styles.input} placeholder="15/06/2023" editable={false} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Piscina" editable={false} />
          <TextInput style={styles.input} placeholder="10H as 12H" editable={false} />
          <TextInput style={styles.input} placeholder="16/06/2023" editable={false} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Quadra de Tênis" editable={false} />
          <TextInput style={styles.input} placeholder="14H as 16H" editable={false} />
          <TextInput style={styles.input} placeholder="20/06/2023" editable={false} />
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
    height: 150,
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
    marginTop: 10,
    marginLeft: 170,
    marginRight: 25,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Reserva;

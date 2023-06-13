import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';

const ReservaSindico = ({navigation}) => {
  const handleSubmit = () => {
    navigation.navigate('ReservaDetalahada');
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Reserva dos Moradores</Text>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} placeholder="Antonio Silva" />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Ver</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} placeholder="Carlos Otavio" />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Ver</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} placeholder="Salomao Santos" />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Ver</Text>
          </TouchableOpacity>
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
  form: {
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: '#6b6969',
    height: 500,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 15,
    marginBottom: 10,
    color: 'black',
    backgroundColor: 'white',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: 'white',
    height: 40,
    marginLeft: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReservaSindico;

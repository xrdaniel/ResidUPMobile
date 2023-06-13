import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, SafeAreaView , ScrollView} from 'react-native';

const ReservaDetalhada = ({navigation}) => {

   const handleSubmit = () => {
     navigation.navigate('ReservaSindico');
  };

  return (
    <SafeAreaView>
     <ScrollView>
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Reserva Detalhada</Text>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} placeholder="Paulo Silva" />
        </View>
        <View style={styles.inputRow}>
          <TextInput style={styles.input} placeholder="Apto 32" />
          <TextInput style={styles.input} placeholder="Churrasqueira" />
        </View>
        <View style={styles.inputRow}>
          <TextInput style={styles.input} placeholder="15/08/2023" />
          <TextInput style={styles.input} placeholder="15H ás 18H" />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
     </SafeAreaView>
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
    height: 300,

  },
  title: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'center',
  },
  inputWrapper: {
    marginBottom: 10,
    height: 40,
    margin: 10,
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 10,
    margin: 10,
    marginRight: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: 'white',
    height: 40,
    marginRight: 10,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 220,
    marginRight: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReservaDetalhada;

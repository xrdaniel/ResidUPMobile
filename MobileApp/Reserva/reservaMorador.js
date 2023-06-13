import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, Button, FlatList } from 'react-native';
import Styles from './styles';

import DatePicker from 'react-native-datepicker';
import SelectDropdown from 'react-native-select-dropdown';

const ReservationScreen = () => {
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedHour, setSelectedHour] = useState('');
  const [date, setDate] = useState('');
  const [reservations, setReservations] = useState([]);

  const handleReservation = () => {
   if (!selectedArea || !selectedHour || !date) {
      alert('Por favor, selecione a área, a hora e a data para fazer a reserva.');
      return;
    }

    const selectedDate = new Date(date);
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      alert('A data selecionada precisa ser maior do que a data atual.');
      return;
    }
    const reservation = {
      area: selectedArea,
      hour: selectedHour,
      date: date,
    };

    setReservations([...reservations, reservation]);
  };

  const areaOptions = ['São de festa', 'Sala de reunião', 'Churrasqueira', 'Quadras de tênis'];
  const hourOptions = ['7h - 12h', '13h - 22h'];

  const Reservar = () => (
    <View>
      <Text style={Styles.textHeaderDown}>Reservar Área</Text>
      <View style={Styles.card}>

        <View style={Styles.selectContainer}>
        <Text style={Styles.label}>Selecione a área:</Text>
    <SelectDropdown
        data={areaOptions}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          setSelectedArea(selectedItem)
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {return item}}
        style={Styles.selectDropdown}
    />
        </View>

        <Text style={Styles.label}>Selecione a hora:</Text>
          <View style={Styles.selectContainer}>
        <SelectDropdown
          data={hourOptions}
          onSelect={(hour) => setSelectedHour(hour)}
          defaultButtonText="Selecione a hora"
          buttonTextAfterSelection={(selectedItem) => selectedItem}
          rowTextForSelection={(item) => item}
         
        />
        </View>
 
        <Text style={Styles.label}>Insira a data:</Text>
        <DatePicker
          style={Styles.datePicker}
          date={date}
          mode="date"
          format="DD-MM-YYYY"
          onDateChange={(selectedDate) => setDate(selectedDate)}
        />

        <Button title="Fazer reserva" onPress={handleReservation} />
      </View>
    </View>
  );

  const EmptyListMessage = () => {
    return (
      <View>
        <Text >Sem Reservas</Text>
      </View>
    );
  };

  const ListarReservas = () => (
    <View>
      <Text style={Styles.textHeaderDown}>MINHAS Reservas</Text>
      <View style={Styles.card}>
        <FlatList
          data={reservations}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text>
              Área: {item.area}, Hora: {item.hour}, Data: {item.date}
            </Text>
          )}
          ListEmptyComponent={EmptyListMessage}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <Reservar />
        <ListarReservas />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReservationScreen;

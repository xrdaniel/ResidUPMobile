import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Styles from './styles';

const Navbar = () => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handlePress = (screenName) => {
    navigation.navigate(screenName);
    setIsOpen(false);
  };

  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.menuButton} onPress={handleToggle}>
        <Ionicons name="menu-outline" size={24} color="#000000" />
      </TouchableOpacity>
      <View style={Styles.titleContainer}>
        <Text style={Styles.titleText}>RESIDUP</Text>
      </View>
      <TouchableOpacity style={Styles.profileButton}
      onPress={() => handlePress('Registro de Ocorrências - Morador')}>
        <Text style={Styles.profileButtonText}>MEU PERFIL</Text>
        
      </TouchableOpacity>
      <View style={[Styles.menu, isOpen && Styles.menuOpen]}>
      <TouchableOpacity
          style={Styles.menuItem}
          onPress={() => handlePress('Resumo')}
        >
          <Text style={Styles.menuItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.menuItem}
          onPress={() => handlePress('OcorrenciaMorador')}
        >
          <Text style={Styles.menuItemText}>Registro de Ocorrências</   
          Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.menuItem}
          onPress={() => handlePress('VisitantesMorador')}
        >
          <Text style={Styles.menuItemText}>Visitantes - Morador</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.menuItem}
          onPress={() => handlePress('Reservas-Morador')}
        >
          <Text style={Styles.menuItemText}>Reservas - Morador</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.menuItem}
          onPress={() => handlePress('Ocorrências-Síndico')}
        >
          <Text style={Styles.menuItemText}>Ocorrências - Síndico</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.menuItem}
          onPress={() => handlePress('VisitanteSindico')}
        >
          <Text style={Styles.menuItemText}>Visitantes - Síndico</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.menuItem}
          onPress={() => handlePress('ReservaSindico')}
        >
          <Text style={Styles.menuItemText}>Reservas - Síndico</Text>
        </TouchableOpacity>
         <TouchableOpacity
          style={Styles.menuItem}
          onPress={() => handlePress('Login')}
        >
          <Text style={Styles.menuItemText}>Logout</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};


export default Navbar;

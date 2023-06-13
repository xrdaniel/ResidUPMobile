import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navbar from './NavBar/Navbar';
import OcorrenciaMorador from './Ocorrencia/ocorrenciaMorador';
import Resumo from './Resumo/resumo';
import Login from './Login/login';
import VisitanteMorador from './VisitanteMorador/visitanteMorador';
import VisitanteSindico from './VisitanteSindico/visitanteSindico';
import OcorrenciaSindico from './Ocorrencia/ocorrenciaSindico';
import OcorrenciaDetalhada from './Ocorrencia/ocorrenciaDelatlhada';
import ReservationScreen from './Reserva/reservaMorador2'
import ReservaDetalahda from './Reserva/ReservaDetalahda'
import ReservaSindico from './Reserva/ReservaSindico'

const Stack = createStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => <Navbar />,
        }}
        initialRouteName='Login'
      >
        <Stack.Screen name="Login" component={Login}
        options={{ headerShown: true }} />
        <Stack.Screen name="OcorrenciaMorador" component={OcorrenciaMorador} />
        <Stack.Screen name="Resumo" component={Resumo} />
        <Stack.Screen name="VisitantesMorador" component={VisitanteMorador} />
        <Stack.Screen name="VisitanteSindico" component={VisitanteSindico} />
        <Stack.Screen name="Ocorrências-Síndico" component={OcorrenciaSindico} />
        <Stack.Screen name="Reservas-Morador" component={ReservationScreen} />
        <Stack.Screen name="ReservaSindico" component={ReservaSindico} />
        <Stack.Screen name="ReservaDetalahada" component={ReservaDetalahda} />
        <Stack.Screen name="OcorrenciaDetalhada" component={OcorrenciaDetalhada} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

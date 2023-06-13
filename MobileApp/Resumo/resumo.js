import React from 'react';
import { View, Text ,SafeAreaView ,ScrollView, TextInput} from 'react-native';
import  Styles from './styles';



const Resumo = ({ navigation }) => {
  const MinhasOcorrencias = () => (
      <View >
        <Text style={Styles.textHeaderDown}>MINHAS OCORRENCIAS</Text>
        <View style={Styles.body}></View>
      </View>
  );

    const MeusVisitantes = () => (
      <View >
        <Text style={Styles.textHeaderDown}>Meus Visitantes</Text>
        <View style={Styles.body}></View>
      </View>
    );

    const MinhasReservas = () => (
      <View >
        <Text style={Styles.textHeaderDown}>Minhas Reservas</Text>
        <View style={Styles.body}>
        <View style={Styles.inputContainer}>
          <TextInput style={Styles.input} placeholder="Churrasqueira" editable={false} />
          <TextInput style={Styles.input} placeholder="15H as 18H" editable={false} />
          <TextInput style={Styles.input} placeholder="15/06/2023" editable={false} />
        </View>
        <View style={Styles.inputContainer}>
          <TextInput style={Styles.input} placeholder="Piscina" editable={false} />
          <TextInput style={Styles.input} placeholder="10H as 12H" editable={false} />
          <TextInput style={Styles.input} placeholder="16/06/2023" editable={false} />
        </View>
        <View style={Styles.inputContainer}>
          <TextInput style={Styles.input} placeholder="Quadra de Tênis" editable={false} />
          <TextInput style={Styles.input} placeholder="14H as 16H" editable={false} />
          <TextInput style={Styles.input} placeholder="20/06/2023" editable={false} />
        </View>
        </View>
      </View>
    );

  return (
    <SafeAreaView >
      <ScrollView>
      <MinhasOcorrencias />
      <MeusVisitantes />
      <MinhasReservas />
      </ScrollView>
    </SafeAreaView>
  );
};


export default Resumo;
import React from 'react';
import { View, Text, SafeAreaView, TextInput, Button } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';


const  OcorrenciaMorador = ({ navigation })=> {

    const [text, setText] = useState('');
    const [descricaoOcorrencia, setTextDescricao] = useState('');
    const [ocorrencias, setOcorrencia] = useState([]);

      const adicionarOcorrencia = () => {
        if(text !== ''){

          if(descricaoOcorrencia !== ''){
              if(text !== '' && descricaoOcorrencia !== ''){
                  if (text && descricaoOcorrencia) {
                    const newOcorrencia = { text, descricaoOcorrencia };
                    setOcorrencia([...ocorrencias, newOcorrencia]);
                    setText('');
                    setTextDescricao('');
                  }
          }else{
            alert('Preencha os campos!')
          }

          }else{
            alert('Preencha o campo "Descrição!"')
          }
        }else{

          alert('Preencha o campo "Titulo!"')
        }
       
    };

    

  return (
     
    <SafeAreaView >
    <View style={styles.container}> 
    
    <Text style={styles.textHeader}>REGISTAR NOVA OCORRENCIA</Text>
  <View style={styles.body}>
    <View style={styles.bodyLadoaLado}>
        <TextInput
           style={styles.inputTitulo}
           onChangeText={text => setText(text)}
           value={text}
           placeholder="TITULO DA OCORRENCIA"/>
      <Button 
      title="SALVAR" 
      color="#01BE63"
      style={{ borderRadius: 8 }} 
      onPress={adicionarOcorrencia}
      /> 
        </View> 
    <TextInput
    style={styles.inputDescricao}
      onChangeText={descricaoOcorrencia => setTextDescricao(descricaoOcorrencia)}
      value={descricaoOcorrencia}
      
    />
    </View>
    
    <Text style={styles.textHeaderDown}>MINHAS OCORRENCIAS</Text>
    <View style={styles.body}>
  {ocorrencias.map((ocorrencia, index) => (
    <View key={index} style={styles.bodyLadoaLado}>
      <Text style={styles.textDescricao}>Título: {ocorrencia.text}</Text>
      <Text style={styles.textDescricao}>Descrição: {ocorrencia.descricaoOcorrencia}</Text>
    </View>
  ))}
</View>
</View>
    </SafeAreaView>
  );
}


export default OcorrenciaMorador;

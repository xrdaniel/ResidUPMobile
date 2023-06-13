import React from 'react';
import { View, Text, SafeAreaView, TextInput, Button ,ScrollView} from 'react-native';
import Styles from "./styles.js";
import { useState } from 'react';


const VisitantesMorador = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
    const [documentoRG, setDocumentoRG] = useState('');
    const [contatoVisitante, setContatoVisitante] = useState('');
    const [visitantes, setVisitantes] = useState([]);

      const adicionarVisitante = () => {
        if(nomeCompleto !== ''){
          if(documentoRG !== ''){
              if(nomeCompleto !== '' && documentoRG !== ''){
                  if (nomeCompleto && documentoRG) {
                    const newVisitante = { nomeCompleto, documentoRG };
                    setVisitantes([...visitantes, newVisitante]);
                    setNomeCompleto('');
                    setDocumentoRG('');
                  }
          }else{
            alert('Preencha os campos!')
          }

          }else{
            alert('Preencha o campo "RG do Visitante!"')
          }
        }else{

          alert('Preencha o campo "Contato!"')
        } 
    };

  return (
    <ScrollView>
<SafeAreaView style={Styles.container}>
 
    <Text style={Styles.textHeader}>ADICIONAR NOVO VISITANTE</Text>
  <View style={Styles.body}>
    <View style={Styles.bodyLadoaLado}>
        <TextInput
           style={Styles.inputNome}
           onChangeText={nomeCompleto => setNomeCompleto(nomeCompleto)}
           value={nomeCompleto}
           placeholder="NOME COMPLETO"/>

       <TextInput
        style={Styles.inputDocumento}
          onChangeText={documentoRG => setDocumentoRG(documentoRG)}
          value={documentoRG}
          placeholder=" RG DO VISITANTE"
          
        />
        </View> 
      <TextInput
            style={Styles.inputContato}
              onChangeText={contatoVisitante => setContatoVisitante(contatoVisitante)}
              value={contatoVisitante}
              placeholder="       CONTATO"
            /> 
            
         <Button 
      title="SALVAR" 
      color="#01BE63"
      style={{ borderRadius: 10 }} 
      onPress={adicionarVisitante}
      /> 
         
    </View>
    
    <Text style={Styles.textHeaderDown}>VISITANTES PERMITIDOS</Text>
    <View style={Styles.body}>
  {visitantes.map((visitante, index) => (
    <View key={index} style={Styles.bodyLadoaLado}>
      <Text style={Styles.textDescricao}>Nome do Visitante: {visitante.nomeCompleto}</Text>
      
    </View> 

  ))}
</View>
 
    </SafeAreaView>
    </ScrollView>
  );
};


export default VisitantesMorador;
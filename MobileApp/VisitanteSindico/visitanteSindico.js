import React from 'react';
import { View, Text, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
import  Styles  from "./styles.js";
import { useState } from 'react';



const VisitanteSindico = ()=> {
  return (
    <ScrollView>
    <SafeAreaView style={Styles.container}>
     
    <Text style={Styles.textHeader}>VISITANTES POR MORADOR</Text>
  <View style={Styles.body}>
    
    </View>
     
    </SafeAreaView>
    </ScrollView>
  );
}

export default VisitanteSindico
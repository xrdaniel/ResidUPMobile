import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { View, Text, SafeAreaView,
ImageBackground,Image,
TouchableOpacity , ScrollView} from 'react-native';
import Styles from './styles'
import { Input } from '../components/input/index.jsx'
import { Button } from '../components/button/index.jsx'




const LoginScreen = ({navigation}) => {
   const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    })
    const onSubmit = async input => {
        const obj = {
            email: input.email,
            password: input.password
        }
        if(input.email !== '' && input.password !== ''){
            navigation.navigate('Resumo')
        } else {
            alert('Preencha os campos')
        }
    }

  return (
    <ScrollView>
     <SafeAreaView style={Styles.container}>
     
            <View style={Styles.header}>
                <Image source={require('../assets/LogoHeader.png')} />
            </View>
            <ImageBackground source={require('../assets/loginBackground.png')} style={Styles.background}>
            <View style={Styles.body}>
                <Text style={Styles.text}>Login</Text>
                <Input 
                    name="email"
                    placeholder='123.456.789-10'
                    control={control}
                    errors={errors}
                    secureTextEntry={false}
                    keyboardType='numeric'
                />
                <Input
                    name="password"
                    placeholder='****'
                    control={control}
                    errors={errors}
                    secureTextEntry={true}
                    keyboardType='default'
                />
                {/* Lembrar senha tem que usar AsyncStorage */}
                <TouchableOpacity onPress={() => navigation.navigate('')}><Text style={{ marginBottom: 10, color: '#8CA8EA' }}>Esqueci minha senha</Text></TouchableOpacity>
                
                <Button
                    onPress={handleSubmit(onSubmit)}
                    name='Entrar'
                />
            </View>
            </ImageBackground>
             
        </SafeAreaView>
        </ScrollView>
  );
};



export default LoginScreen;

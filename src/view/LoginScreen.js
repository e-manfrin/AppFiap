import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native'

export default function LoginScreen() {

    const navigation = useNavigation();

    function goSignup(){
        navigation.replace('Signup')
    }

    function handleAlert(){
        Alert.alert("Você acionou um alerta")
    }

 return (
   <View style={styles.container}>
       <ImageBackground style={styles.imgBack} source={require('../../assets/back.png')}>
            <Image
            source={require('../../assets/logo.png')}
            style={styles.imgLogo}
            />
            <Text style={styles.textTitle}>Entrar</Text>

            <TextInput
            placeholder='Username'
            style={styles.inputField}
            placeholderTextColor="#FFF" 
            type="text"
            />
            <TextInput
            placeholder='Senha'
            style={styles.inputField}
            placeholderTextColor="#FFF" 
            type="password"
            />

            <TouchableOpacity style={styles.btnEntrar} onPress={handleAlert}>
                <Text style={styles.txtEntrar}>ENTRAR</Text>
            </TouchableOpacity>

            <View style={styles.bottomMenu}>
                <TouchableOpacity onPress={goSignup}>
                    <Text style={styles.txtBottomMenu}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAlert}>
                    <Text style={styles.txtBottomMenu}>Esqueceu a senha</Text>
                </TouchableOpacity>
            </View>

       </ImageBackground>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imgBack:{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgLogo:{
        width: 150,
        height: 40
    },
    textTitle:{
        fontSize: 40,
        color: '#FFF',
        fontWeight: '500',
        margin: 30
    },
    inputField:{
        width: '90%',
        padding: 15,
        backgroundColor: '#626262',
        opacity: 0.6,
        height: 60,
        borderRadius: 2,
        margin: 10,
        color: '#FFF',
        fontWeight: '500'
    },
    btnEntrar:{
        width: '90%',
        backgroundColor: '#ed145b',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 20
    },
    txtEntrar:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15,
    },
    bottomMenu:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        margin: 10
    },
    txtBottomMenu:{
        color: '#FFF',
        fontWeight: '500',
    }
  });
  
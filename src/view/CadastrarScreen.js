import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, TextInput, Image, Alert, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { RadioButton } from 'react-native-paper';
import Checkbox from 'expo-checkbox';

export default function SignupScreen() {


    const [checked, setChecked] = useState('Masculino');
    const [isChecked1, setChecked1] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [username, setUsername] = useState();
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [confSenha, setConfSenha] = useState("");
    const [sexo, setSexo] = useState();

    const navigation = useNavigation();

    useEffect(() => {
        setChecked('Masculino')
        setSexo('Masculino')
    }, [])

    function handleAlert() {
        Alert.alert(`Username: ${username}\nNome: ${nome}\nSenha: ${senha}\nConfirmar Senha: ${confSenha}\nSexo: ${sexo}`)
    }

    function handleSignup() {
        if(username == "" || nome == "" || senha == "" || sexo == "" || confSenha == "") {
            Alert.alert('Preencha todos os campos')
        }else if(isChecked1 == false) {
            Alert.alert('Você precisa concordar com os termos');
        }else if(senha != confSenha) {
            Alert.alert('As senhas não conferem') 
        }else{
            handleAlert();
        }
    }

 return (
   <SafeAreaView style={styles.container}>
       <ScrollView >
       <ImageBackground style={styles.imgBack} source={require('../../assets/back.png')}>
            <Image
            source={require('../../assets/logo.png')}
            style={styles.imgLogo}
            />
            <Text style={styles.textTitle}>Cadastrar</Text>

            <TextInput
            placeholder='Username'
            style={styles.inputField}
            placeholderTextColor="#FFF" 
            type="text"
            onChangeText={(texto) => setUsername(texto)}
            />

            <TextInput
            placeholder='Nome Completo'
            style={styles.inputField}
            placeholderTextColor="#FFF" 
            type="text"
            onChangeText={(texto) => setNome(texto)}
            />

            <TextInput
            placeholder='Senha'
            style={styles.inputField}
            placeholderTextColor="#FFF" 
            type="password"
            onChangeText={(texto) => setSenha(texto)}
            />

            <TextInput
            placeholder='Confirmar Senha'
            style={styles.inputField}
            placeholderTextColor="#FFF" 
            type="password"
            onChangeText={(texto) => setConfSenha(texto)}
            />

            <View style={styles.radioGroup}>
                <Text style={styles.txtRadioTitle}>Sexo:</Text>
                <View style={styles.radio}>
                    <RadioButton
                        value="Masculino"
                        status={ checked === 'Masculino' ? 'checked' : 'unchecked' }
                        onPress={() => {setChecked('Masculino'); setSexo('Masculino')}}
                        style={styles.radioButton}
                    />
                    <TouchableOpacity onPress={() => setChecked('Masculino')}>
                        <Text style={styles.radioText}>Masculino</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.radio}>
                    <RadioButton
                        value="Feminino"
                        status={ checked === 'Feminino' ? 'checked' : 'unchecked' }
                        onPress={() => {setChecked('Feminino'); setSexo('Feminino')}}
                    />
                    <TouchableOpacity onPress={() => setChecked('Feminino')}>
                        <Text style={styles.radioText}>Feminino</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.check}>
                    <Checkbox style={styles.checkbox} value={isChecked1} onValueChange={setChecked1} />
                    <Text style={styles.radioText}>Li e concordo com os termos de uso</Text>
                </View>
                
                <View style={styles.check}>
                    <Checkbox style={styles.checkbox} value={isChecked2} onValueChange={setChecked2} />

                    <Text style={styles.radioText}>Aceito receber emails</Text>
                </View>

            </View>


            <TouchableOpacity style={styles.btnEntrar} onPress={handleSignup}>
                <Text style={styles.txtEntrar}>CADASTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnEntrar} onPress={() => navigation.replace('Login')} >
                <Text style={styles.txtEntrar}>VOLTAR</Text>
            </TouchableOpacity>

       </ImageBackground>
       </ScrollView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000'
    },
    imgBack:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        marginBottom: 50
    },
    imgLogo:{
        width: 120,
        height: 30,
        marginTop: 50
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
        margin: 10
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
    },
    radioText:{
        color: '#FFF',
        fontSize: 15,
        marginLeft: 20
    },
    radio:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtRadioTitle:{
        fontSize: 20,
        color: '#FFF',
        marginBottom: 10
    },
    radioGroup:{
        justifyContent: 'flex-start',
        width: '90%',
        margin: 20
    },
    check:{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        marginTop: 20
    }
  });
import React, { Component } from 'react';
import { Alert, View, Text, TextInput, TouchableOpacity,StyleSheet, TouchableHighlight} from 'react-native';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

   onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
   }
   static navigationOptions = {
    title: 'Welcome to Login',
    tabBarLabel: 'Login Page',
  }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
            <TextInput style = {styles.input}
               value={this.state.username}
               onChangeText={(username) => this.setState({ username })}
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next" 
               placeholder='Email or Mobile Num' 
               placeholderTextColor='rgba(225,225,225,0.7)'/>

            <TextInput style = {styles.input}
              returnKeyType="go" 
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              ref={(input)=> this.passwordInput = input} 
              placeholder='Password' 
              placeholderTextColor='rgba(225,225,225,0.7)' 
              secureTextEntry/>

            <TouchableOpacity onPress={this.onLogin.bind(this)} style={styles.buttonContainer}>
                <Text  style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('RegistrationScreen')} style={[styles.buttonContainer,{backgroundColor: '#7567B1'}]}>
                <Text  style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
       </View>
            )
    }
}
// define your styles
const styles = StyleSheet.create({
    container: {
     padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
})
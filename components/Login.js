import React, { Component } from 'react';
import { Alert, View, Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native';

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

    render() {
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
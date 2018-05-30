import React, { Component } from 'react';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Text,
  View
} from 'react-native';
import moment from 'moment';
import UserService from '../android/services/user-service';

export default class RegistrationForm extends Component {

    constructor(props){
        super(props);
        this.state = {
          name: '',
          email: '',
          password: '',
          isvegan: true
        }
        this.onSelect = this.onSelect.bind(this)
      }

  /**
   * Signup button click listener
   */
  onSignUpPress = () => {
    const user = {
      name : this.state.name,
      email : this.state.email,
      password : this.state.password,
      isvegan: this.state.isvegan
    }
    console.log(user);

    UserService.register(user).then(function(res,err) {
      if (res) {
        console.log(res);
      }
    });
  }

  onSelect = (index, value) => {
    console.log(value);
    this.setState({
      isvegan: (value === 'veg') ? 'yes' : 'no'
    })
    console.log(this.state.isvegan);
  }

  render() {
    return (
      <View style={styles.register}>
        <Text style={styles.header}>Registration</Text>
        <TextInput style={styles.textinput} placeholder='Your name' underlinedColorAndroid={'transparent'} onChangeText={name => this.setState({name})}/>
        <TextInput style={styles.textinput} placeholder='Your email' underlinedColorAndroid={'transparent'} onChangeText={email => this.setState({email})}/>
        <RadioGroup onSelect = {(index, value) => this.onSelect(index, value)}>
          <RadioButton value={'veg'} >
            <Text>Veg</Text>
          </RadioButton>
 
          <RadioButton value={'non-veg'}>
            <Text>Non-Veg</Text>
          </RadioButton>
        </RadioGroup>
        <TextInput style={styles.textinput} placeholder='Choose password' underlinedColorAndroid={'transparent'} onChangeText={password => this.setState({password})}/>
        <TextInput style={styles.textinput} placeholder='Confirm password' secureTextEntry={true} underlinedColorAndroid={'transparent'}/>
        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSignUpPress.bind(this)}>
             <Text  style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity> 
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  register: {
    alignSelf: 'stretch',
    padding: 20
  },
  header: {
      fontSize: 24,
      color: '#fff',
      paddingBottom: 10,
      marginBottom: 40,
      borderBottomColor: '#199187',
      borderBottomWidth: 1
  },
  textinput: {
      alignSelf: 'stretch',
      height: 40,
      marginBottom: 30,
      color: '#fff',
      borderBottomColor: '#199187',
      borderBottomWidth: 1
  },  
  buttonText:{
     color: '#fff',
     textAlign: 'center',
     fontWeight: '700'
  },
  buttonContainer:{
      backgroundColor: '#2980b6',
      paddingVertical: 15
  },
  datePickerBox:{
    marginTop: 9,
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    padding: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    height: 38,
    justifyContent:'center'
  },
  datePickerText: {
    fontSize: 14,
    marginLeft: 5,
    borderWidth: 0,
    color: '#121212',
  },
});

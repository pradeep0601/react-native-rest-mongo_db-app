import { createBottomTabNavigator  } from 'react-navigation';
import Login from '../Login';
import RegistrationForm from '../RegistrationForm';

const AppTabNavigator = createBottomTabNavigator ({
    LoginScreen: { screen: Login },
    RegistrationScreen: { screen: RegistrationForm }
  });
  
  export default AppTabNavigator;
import { createStackNavigator } from 'react-navigation-stack';
import LogIn from './components/logInComponents/logIn';
import SignUp from './components/logInComponents/signUp';
import ForgatePassword from './components/logInComponents/forgatePassword';
//import Dashboard from './components/dashBoardComponent/dashboard';

export const StackNavigator = createStackNavigator({
    LogIn: { screen: LogIn, navigationOptions: { header: null } },
    SignUp: { screen: SignUp, navigationOptions: { header: null } },
    ForgatePassword: { screen: ForgatePassword, navigationOptions: { header: null } },
    //DashBoard: { screen: Dashboard, navigationOptions: { header: null } },
}, {
    initialRouteName: 'LogIn'
});

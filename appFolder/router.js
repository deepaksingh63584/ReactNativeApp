import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { screen } from 'react-native-splash-screen'
import LogIn from './components/logInComponents/logIn';
import SignUp from './components/logInComponents/signUp';
import ForgatePassword from './components/logInComponents/forgatePassword';
import Dashboard from './components/dashBoardComponent/dashboard';


const MainNavigator = createStackNavigator({
    LogIn: { screen: LogIn, navigationOptions: { header: null } },
    SignUp: { screen: SignUp, navigationOptions: { header: null } },
    ForgatePassword: { screen: ForgatePassword, navigationOptions: { header: null } },
    DashBoard: { screen: Dashboard, navigationOptions: { header: null } },
}, {
    initialRouteName: 'LogIn'
});

const RouteApp = createAppContainer(MainNavigator);

export default RouteApp;
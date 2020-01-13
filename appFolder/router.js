import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { LogIn } from "./components/logInComponents/logIn";
import { SignUp } from "./components/logInComponents/signUp";
import { ForgatePassword } from "./components/logInComponents/forgatePassword";

const MainNavigator = createStackNavigator({
    LogIn: { screen: LogIn },
    ForgatePassword: { screen: ForgatePassword },
});

const App = createAppContainer(MainNavigator);

export default App;
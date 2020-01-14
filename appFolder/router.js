import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { LogIn } from "./components/logInComponents/logIn";
import { SignUp } from "./components/logInComponents/signUp";
import { ForgatePassword } from "./components/logInComponents/forgatePassword";
import { DashBoard } from "./components/dashBoardComponent/dashboard"

const MainNavigator = createStackNavigator({
    LogIn: { screen: LogIn },
    SignUp: { screen: SignUp },
    ForgatePassword: { screen: ForgatePassword },
    DashBoard: { screen: DashBoard },
});

const App = createAppContainer(MainNavigator);

export default App;
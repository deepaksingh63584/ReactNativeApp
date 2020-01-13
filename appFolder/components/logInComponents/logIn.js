import React, { Component } from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import logInCss from "./logInCss";
import { OutlinedTextField } from 'react-native-material-textfield';


class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailid: "",
            password: "",
            showpassword: "false",
            errors: {},
        };

    }
    render() {
        return (
            <ScrollView>
                <View className="signupfullView" style={logInCss.signupfullView}>
                    <View className="initialView" style={logInCss.initialView}>
                        <Text className='mainHeader' style={logInCss.mainHeader}>
                            <Text style={{ color: '#4325F4', fontSize: 35 }}>F</Text>
                            <Text style={{ color: '#DB4437', fontSize: 35 }}>u</Text>
                            <Text style={{ color: '#F4B400', fontSize: 35 }}>n</Text>
                            <Text style={{ color: '#4355F4', fontSize: 35 }}>d</Text>
                            <Text style={{ color: '#0F9D58', fontSize: 35 }}>o</Text>
                            <Text style={{ color: '#DB4437', fontSize: 35 }}>o</Text>
                        </Text>
                        <Text style={{ fontSize: 28, marginTop: '2%' }}>
                            LogIn your Fundoo Account
                    </Text>
                        <Text style={{ fontSize: 18, marginTop: '4%' }}>
                            Enter your Details
                    </Text>
                    </View>
                    <View className="textViewContent" style={logInCss.textViewContent}>
                        <View className="textView" style={logInCss.textView}>
                            <OutlinedTextField
                                label='Email-Id'
                                value={this.state.emailId}
                                onChangeText={(emailId) => this.setState({ emailId })}
                                error={this.state.errors.emailId}
                                errorColor='red'
                                helperText={this.state.errors.emailId}
                            />
                        </View>
                        <View className="textView" style={logInCss.textView}>
                            <OutlinedTextField
                                label='Password'
                                value={this.state.passwordItem}
                                onChangeText={(passwordItem) => this.setState({ passwordItem })}
                                error={this.state.errors.password}
                                errorColor='red'
                                helperText={this.state.errors.passwordItem}
                            />
                        </View>
                    </View>
                    <View>
                        
                    </View>
                    <View style={{ justifyContent: "flex-end", alignItems: 'flex-end', padding: 45, marginTop: 110 }}>
                        <Button
                            title="       Next        "
                            onPress={this.validation}
                        />
                    </View>

                </View >
            </ScrollView>
        );
    }


    validation = () => {

        let errors = {};
        var validform = true;

        if (!this.state.emailId) {
            validform = false;
            errors["emailId"] = "Please enter your email-ID.";
        }

        if (typeof this.state.emailId !== "undefined") {
            //regex used for email validation
            var pattern = new RegExp(/^[a-zA-Z0-9-.]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/);
            if (!pattern.test(this.state.emailId)) {
                validform = false;
                errors["emailId"] = "Please enter valid emailID.";
            }
        }

        if (!this.state.passwordItem) {
            validform = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof this.state.passwordItem !== "undefined") {
            if (!this.state.passwordItem.match(/^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                validform = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        this.setState({
            errors: errors
        });
        return validform;
    }
}
export default LogIn;
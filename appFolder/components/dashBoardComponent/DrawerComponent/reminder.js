import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';


export default class Reminder extends React.Component {
    render() {
        return (
            <View style={{ height: "100%", width: "100%" }}>
                <Text style={{ fontSize: 50, backgroundColor: 'deeppink' }}>Reminder</Text>
            </View>
        );
    }
}
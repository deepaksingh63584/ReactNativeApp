import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import TopBar from "../topAppBar"
import BottomBar from '../bottomAppbar'


export default class Notes extends React.Component {
    render() {
        return (
            <View style={{ height: "100%", width: "100%" }}>
                <View>
                    <TopBar NotesProps={this.props} />
                </View>
                <View style={{ height: '100%', width: '100%' }}>
                    <Text style={{ fontSize: 50, backgroundColor: 'deeppink' }}>NoteCard</Text>
                </View>
                <View style={{ bottom: 0, width: '100%', position: 'absolute' }}>
                    <BottomBar />
                </View>
            </View>
        );
    }
}
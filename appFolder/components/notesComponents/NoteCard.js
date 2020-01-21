import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class GridViewNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <View style={styles.mainNotecard}>
                <View style={styles.topFooter}>
                    <TouchableOpacity
                        onPress={() => { this.props.NotesProps.navigation.openDrawer() }}
                    >

                    </TouchableOpacity>
                </View >
                <View style={styles.bottomFooter}>
                    <TouchableOpacity
                        onPress={() => { this.props.NotesProps.navigation.openDrawer() }}
                    >

                    </TouchableOpacity>
                </View >
            </View>
        );
    }
}

const styles = StyleSheet.create({

    topFooter: {
        backgroundColor: 'deeppink',
        height: 50,
    },

    bottomFooter: {
        backgroundColor: 'red',
        height: 50,

    },

    mainNotecard: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'yellow'
    },

});
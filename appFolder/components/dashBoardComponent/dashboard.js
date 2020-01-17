import React from 'react';

import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { Button, Avatar } from 'react-native-paper';



export default class DashBoard extends React.Component {
    state = {
        search: '',

    };

    updateSearch = search => {
        this.setState({ search });
    };



    render() {
        const grid = require('../../assets/grid.png');
        const list = require('../../assets/list.png');
        return (
            <View style={styles.mainSearch}>
                <View style={styles.menuButton}>
                    <TouchableOpacity>
                        <Image
                            style={{ padding: 15, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
                            source={require('../../assets/menuIcon.png')}
                        />

                    </TouchableOpacity>
                    {/* onPress={() => alert('menu popAlert')} */}
                </View>
                <View style={styles.searchButton}>
                    <TouchableOpacity>
                        <Text
                            label='Search your notes..'
                            type="input"


                        />
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity>
                        {/* <Button
                            onPress={(gridList) => { gridList ? grid : list }} /> */}
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Avatar.Icon size={45} icon="D" style={{ marginTop: 8 }} />
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    searchButton: {
        display: 'flex',
        width: 285,
        // flexWrap: 'wrap',
        position: 'relative',
        // backgroundColor: 'white'

    },
    menuButton: {
        // backgroundColor: 'yellow'
    },
    mainSearch: {
        padding: 12,
        // backgroundColor: 'deeppink',
        marginTop: 8,
        marginRight: 8,
        marginLeft: 8,
        flexDirection: 'row',

    }
});
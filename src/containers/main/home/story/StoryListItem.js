import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function StoryListItem({item, storyOnPress}) {
    return (
        <View style={Styles.container}>
            <TouchableOpacity onPress={storyOnPress}>
                <LinearGradient
                    colors={['#CA1D7E', '#E35157', '#F2703F']}
                    start={{x: 0.0, y: 1.0}}
                    end={{x: 1.0, y: 1.0}}
                    style={{borderRadius: 100, padding: 2}}
                >
                    <View style={{borderWidth: 2, borderRadius: 100}}>
                        <Image source={{uri: item.src}} style={{width: 55, height: 55, borderRadius: 70}} />
                    </View>
                </LinearGradient>
            </TouchableOpacity>
            <View>
                <Text style={Styles.storyText}> {item.key} </Text>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginStart: 10,
        marginEnd: 10,
        marginTop: 10,
        marginBottom: 5,
        alignItems: 'center',
    },
    storyText: {
        color: 'white',
        fontSize: 12,
        marginTop: 5,
    },
})

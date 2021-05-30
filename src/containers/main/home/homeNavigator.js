import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import palette from '../../../res/palette';
import images from '../../../res/images';
import colors from '../../../res/colors';


export default function homeNavigator() {

    const Stack = createStackNavigator();

    StatusBar.setBarStyle('light-content');

    return (
        <Stack.Navigator>
            
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})

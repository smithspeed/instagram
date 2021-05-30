import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../res/colors';
import images from '../../res/images';
import TabNavigator from './TabNavigator';

export default function MainNavigator({navigation}) {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MainScreen"
                component={TabNavigator}
                options={{
                    title: '', 
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})

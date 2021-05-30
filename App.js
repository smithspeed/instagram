import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import AppNavigator from './src/AppNavigator'

export default function App() {
    return <NavigationContainer>{<AppNavigator/>}</NavigationContainer>
}

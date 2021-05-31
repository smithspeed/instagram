import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../res/colors';
import images from '../../res/images';
import TabNavigator from './TabNavigator';
import StoryCamera from './home/StoryCamera/StoryCamera';
import StoryScreen from './home/story/StoryScreen';
import DirectMessageScreen from './home/DirectMessage/DirectMessageScreen'

export default function MainNavigator({navigation}) {

    const Stack = createStackNavigator();

    const NavigateToStoryCamera = () => navigation.navigate('StoryCamera');

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MainScreen"
                component={TabNavigator}
                options={{
                    title: '', 
                    headerShown: false
                }}
                NavigateToStoryCamera={NavigateToStoryCamera}
            />
            <Stack.Screen
                name="StoryCameraScreen"
                component={StoryCamera}
                options={{
                    title: '',
                    gestureDirection: 'horizontal-inverted',
                    headerBackTitleVisible: false,
                    headerTransparent: true,
                    headerLeft: () => (
                        <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}></View>
                    ),
                }}
            />
            <Stack.Screen
                name="DirectMessageScreen"
                component={DirectMessageScreen}
                options={({navigation}) => ({
                    //headerTransparent: true,
                    headerTitle: () => (
                        <View>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                                johndoe
                            </Text>
                        </View>
                    ),
                    headerBackTitleVisible: false,
                    headerStyle: {
                        backgroundColor: colors.bottomBackGround,
                        shadowColor: colors.seperatorLineColor,
                    },
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
                            <Image
                                source={images.dmBackButton}
                                style={{width: 20, height: 20, marginStart: 10}}
                            />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <TouchableOpacity onPress={() => console.log('Pressed Write in DM')} style={{flexDirection: 'row'}}>
                                <Image source={images.write} style={{width: 25, height: 25, marginEnd: 20}} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => console.log('Pressed Video Camera in DM')} style={{flexDirection: 'row'}}>
                                <Image source={images.videoCamera} style={{width: 30, height: 30, marginEnd: 10}}/>
                            </TouchableOpacity>
                        </View>
                    ),
                })}
            />
            <Stack.Screen
                name="StoryScreen"
                component={StoryScreen}
                navigation={navigation}
                options={{
                    headerStyle: {backgroundColor: 'black', shadowColor: 'black'},
                    title: '',
                    headerLeft: () => <View></View>,
                }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})

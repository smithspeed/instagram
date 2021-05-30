import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import images from '../../res/images';
import colors from '../../res/colors';
import palette from '../../res/palette';

import homeNavigator from './home/homeNavigator';

export default function TabNavigator({NavigateToStoryCamera}) {

    const Tab = createBottomTabNavigator();

    return (
        <React.Fragment>
            <Tab.Navigator
                tabBarOptions={{
                    showLabel: false,
                    showIcon: true,
                    style: {
                        backgroundColor: colors.bottomBackGround,
                        borderTopColor: colors.seperatorLineColor,
                    },
                }}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused}) => {
                        let iconName;
          
                        if (route.name === 'Home') {
                            iconName = focused ? images.home_selected : images.home;
                        } else if (route.name === 'Search') {
                            iconName = focused ? images.search_selected : images.search;
                        } else if (route.name === 'AddPost') {
                            iconName = focused ? images.add_selected : images.add;
                        } else if (route.name === 'Activity') {
                            iconName = focused ? images.activity_selected : images.activity;
                        } else if (route.name === 'Profile') {
                            iconName = focused ? images.profile_selected : images.profile;
                        }
                        
                        return <Image style={palette.header.image} source={iconName} />;
                    },
                })}
            >
                <Tab.Screen name="Home" component={homeNavigator} />

            </Tab.Navigator>
        </React.Fragment>
        
    )
}

const styles = StyleSheet.create({})

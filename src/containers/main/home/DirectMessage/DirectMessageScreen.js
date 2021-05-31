import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import colors from '../../../../res/colors';
import images from '../../../../res/images';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import DirectMessageSearch from './DirectMessageSearch';
import Title from './Title';
import MessagesList from './MessagesList';

const data = [{key: '1'}];

export default function DirectMessageScreen() {
    return (
        <>
            <FlatList
                style={{backgroundColor: '#000', flex: 1}}
                data={data}
                renderItem={() => (
                    <>
                        <DirectMessageSearch />
                        <Title />
                        <MessagesList />
                    </>
                )}
            />
            <TouchableOpacity>
                <View
                    style={{
                        backgroundColor: colors.bottomBackGround,
                        height: 45,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={images.dmBottomCamera} style={{width: 25, height: 25}} />
                        <Text style={{color: '#4296f5', marginStart: 10}}>Camera</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({})

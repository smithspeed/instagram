import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../../../res/colors';
import images from '../../../../res/images';

export default function MessageListItem({data}) {
    return (
        <TouchableOpacity>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginStart: 10,
                    marginEnd: 10,
                    marginTop: 15,
                }}
            >
                <View style={{flexDirection: 'row'}}>
                    <Image source={{uri: 'https://picsum.photos/600'}} style={{width: 60, height: 60, borderRadius: 70}}/>
                    <View style={{flexDirection: 'column', marginStart: 15}}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>{data.name}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{color: colors.textFaded2}}>{data.message}</Text>
                            <Image source={images.dot} style={{width: 3, height: 3, marginStart: 5}} />
                            <Text style={{color: colors.textFaded2, marginStart: 5}}>2h</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity>
                    <View>
                        <Image source={images.photo_camera} style={{width: 25, height: 25}} />
                    </View>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})

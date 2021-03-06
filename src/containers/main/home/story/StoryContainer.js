import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../../../res/colors';
import StoryListItem from './StoryListItem';

export default function StoryContainer({stories, storyOnPress}) {
    return (
        <View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                indicatorStyle={'white'}
                horizontal={true}
                data={stories}
                renderItem={({item}) => (
                    <StoryListItem item={item} storyOnPress={storyOnPress} />
                )}
                keyExtractor={(item) => item.key}
            />
            <View style={Styles.sperator}></View>
        </View>
    )
}

const Styles = StyleSheet.create({
    sperator: {
        backgroundColor: colors.seperatorLineColor,
        height: 0.5,
    },
})

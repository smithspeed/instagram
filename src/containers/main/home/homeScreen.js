import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import colors from '../../../res/colors';
import Post from './post/Post';
import StoryContainer from './story/StoryContainer';

export default function homeScreen({navigation}) {

    const data = [
        {key: '1'},
        {key: '2'},
        {key: '3'},
        {key: '4'},
        {key: '5'},
        {key: '6'},
        {key: '7'},
        {key: '8'},
        {key: '9'},
        {key: '10'},
        {key: '11'},
        {key: '12'},
    ];

    const storyOnPress = () => navigation.navigate('Story');

    const post = {
        userName: 'John Doe',
        placeName: 'Istanbul, Turkey',
        imgUrl: 'https://picsum.photos/1920/1080',
        likeCount: 103,
        commentCount: 21,
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut sem viverra.',
        publishDate: new Date().toDateString(),
    };

    const stories = [
        {
            key: 'JohnDoe',
            hasStory: true,
            src: 'https://picsum.photos/600',
        },
        {
            key: 'CarlaCoe',
            hasStory: true,
            src: 'https://picsum.photos/600',
        },
        {
            key: 'DonnaDoe',
            hasStory: true,
            src: 'https://picsum.photos/600',
        },
        {
            key: 'JuanDoe',
            hasStory: true,
            src: 'https://picsum.photos/600',
        },
        {
            key: 'MartaMoe',
            hasStory: true,
            src: 'https://picsum.photos/600',
        },
        {
            key: 'PaulaPoe',
            hasStory: true,
            src: 'https://picsum.photos/600',
        },
    ];

    return (
        <FlatList
            style={{backgroundColor: colors.background}}
            data={data}
            ListHeaderComponent={() => (
                <StoryContainer stories={stories} storyOnPress={storyOnPress} />
            )}
            renderItem={({item, index}) => (
                <Post post={post} />
            )}
        />
    )
}

const styles = StyleSheet.create({})

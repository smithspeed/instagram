import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import colors from '../../../../res/colors';

export default function PostComments({post}) {
    return (
        <TouchableOpacity style={{marginTop: 5, marginStart: 15}} onPress={() => console.log('Pressed Post Comments')}>
            <Text style={{color: colors.textFaded2}}>
                View all {post.commentCount} comments
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})

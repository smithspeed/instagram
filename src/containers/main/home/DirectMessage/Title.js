import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Title() {
    return (
        <View style={{marginTop: 10, marginStart: 10}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
                Messages
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({})

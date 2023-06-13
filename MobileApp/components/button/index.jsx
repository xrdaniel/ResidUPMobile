import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Styles  from './styles.jsx'

export function Button({ onPress, name }) {
    return (
        <TouchableOpacity style={Styles.container} onPress={onPress}>
            <Text style={Styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}
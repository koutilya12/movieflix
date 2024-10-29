import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, {useEffect} from 'react'
import ListView from './ListView'

const NowPlaying = ( props ) => {
    useEffect(() => {
    }, [])
    return (
        <ListView props = {props} />
    )
}

export default NowPlaying
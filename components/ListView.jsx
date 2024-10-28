import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const ListView = ({ props }) => {

    const navigation = useNavigation();

    const Item = (props) => {
        console.log('==::', props.data)
        return (
            <TouchableOpacity
                style={{}}
                onPress={() => {
                    navigation.navigate("DetailsScreen", props.data)
                    console.log('Image clicked')
                }}
            >
                <Image
                    source={{ uri: "https://image.tmdb.org/t/p/w500/" + props.data.poster_path }}
                    style={{ height: 250, width: 150, borderRadius: 20, margin: 5 }}
                />
            </TouchableOpacity>
        )
    }

    return (
        <>
            <View>
                <Text style={styles.nowPlayingTitle}>Now Playing</Text>
                <FlatList
                    horizontal
                    data={props.movieData}
                    renderItem={({ item }) => <Item data={item} />}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    nowPlayingTitle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        margin: 10
    }
})

export default ListView
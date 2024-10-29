import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

const ListView = ({ props }) => {

    const navigation = useNavigation();
    const [searchList, setSearchList] = useState(false)

    useEffect(() => {
        setSearchList(props.movieData.category === "search" ? true : false)
    }, [])

    //renderItem for FlatList to display movies horizontally on Home Screen.
    const Item = (props) => {
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

    //renderItem for FlatList to display movies list vertically on Details Screen.
    const SearchList = (props) => {
        return (
            <>
                <TouchableOpacity 
                onPress={() => {
                     navigation.navigate("DetailsScreen", props.data)
                     console.log('Image clicked')
                }}
                    style={styles.searchListStyle}
                >
                    <View style={{ flexDirection: "row" }}>
                        <Image
                            source={{ uri: "https://image.tmdb.org/t/p/w500/" + props.data.poster_path }}
                            style={{
                                height: 75,
                                width: 75,
                                margin: 5,
                                borderRadius: 10
                            }}
                        />
                        <View style={{ marginLeft: 5 }}>
                            <Text style={styles.textStyle}>{props.data.title}</Text>
                            <Text style={styles.yearStyle}>{props.data.release_date}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <Ionicons name="ellipsis-vertical" size={18} color="white" style={styles.iconStyle} />
            </>
        )
    }

    return (
        <>
            <View>
                {!searchList ? <Text style={styles.nowPlayingTitle}>{props.movieData.category}</Text> : null}
                <FlatList
                    horizontal={searchList ? false : true}
                    data={props.movieData.movieList}
                    //condition to check if list has to be displayed on Home Screen or Details Screen.
                    renderItem={({ item }) => searchList ? <SearchList data={item} /> : <Item data={item} />}
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
    },
    searchListStyle: {
        backgroundColor: "white",
        margin: 10,
        borderRadius: 15,
        height: 80,
        justifyContent: "center",
        backgroundColor: "#121212",
        borderBottomWidth: 1,
        borderBottomColor: "gray"
    },
    textStyle: {
        fontSize: 15,
        color: "white",
        marginTop: 5,
        marginBottom: 5
    },
    yearStyle: {
        fontSize: 12,
        color: "gray",
        marginTop: 5
    },
    iconStyle: {
        position: "absolute",
        right: 10,
        top: 5,
        marginTop: 10,
    }
})

export default ListView
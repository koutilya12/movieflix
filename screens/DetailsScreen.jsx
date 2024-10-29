import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

const DetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' }, tabBarVisible: false });
    return () =>
      navigation.getParent()?.setOptions({ tabBarStyle: { backgroundColor: '#1a1919' }, tabBarVisible: undefined });
  }, [navigation])

  const [movieDetails, setMovieDetails] = useState({})
  useEffect(() => {
    setMovieDetails(route.params)
  }, [])

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#131212" }}>
      <View style={{ flexDirection: "row", justifyContent: "center"}}>
        <Ionicons name="arrow-back" size={30} color="white" style={styles.iconStyle} onPress={() => {navigation.navigate("HomeScreen")}}/>
        <Text style={{ ...styles.titleStyle, textAlign: "center" }}>{movieDetails.original_title}</Text>
      </View>
      <Image
        source={{ uri: 'https://image.tmdb.org/t/p/w500/' + movieDetails.backdrop_path }}
        style={styles.posterStyle}
      />
      <View style={{ padding: 5 }}>
        <Text style={styles.titleStyle}>{movieDetails.title}</Text>
        <Text style={{ ...styles.textStyle, color: "gray", marginBottom: 12 }}>{movieDetails.release_date} | {movieDetails.adult ? "18+" : "13+"}|{ }|{ }</Text>
        <Text style={styles.textStyle}>{route.params.overview}</Text>
        <Text style={styles.textStyle}>Starring: Song Hye-kyo, Lee Don-hyun</Text>
        <Text style={styles.textStyle}>Creators: Kim Eun-sook, An Gil-ho</Text>
        <Text style={styles.textStyle}>Genre: Revenge, Psychological Thriller</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  posterStyle: {
    height: 300,
    width: "100%",
    marginTop: 5,
    marginBottom: 10
  },
  titleStyle: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
    marginBottom: 5
  },
  textStyle: {
    fontSize: 15,
    color: "white",
    marginBottom: 8,
    color: "white"
  },
  iconStyle: {
    position: "absolute",
    left: 0,
    marginTop: 5,
    marginLeft: 5
  }
})

export default DetailsScreen
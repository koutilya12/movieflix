import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const DetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' }, tabBarVisible: false });
    return () =>
      navigation.getParent()?.setOptions({ tabBarStyle: { backgroundColor: '#1a1919' }, tabBarVisible: undefined });
  }, [navigation])

  const [movieDetails, setMovieDetails] = useState({})
  useEffect(() => {
    console.log('++++', route.params)
    setMovieDetails(route.params)
    console.log('&&11', movieDetails)
  }, [])

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#131212" }}>
      <Text style={{ ...styles.titleStyle, textAlign: "center" }}>{movieDetails.original_title}</Text>
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
  }
})

export default DetailsScreen
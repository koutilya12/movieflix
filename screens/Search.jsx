import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { fetchPopularMovies } from '../api/moviedb'
import { Ionicons } from '@expo/vector-icons'
import NowPlaying from '../components/NowPlaying';

const Search = () => {
  const [movieResults, setMovieResults] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    getPopularMovies()
  }, [])

  const getPopularMovies = async () => {
    const resp = await fetchPopularMovies()
    console.log("Movies for Search: ", resp)
    setMovieResults(resp.results)
  }

  onChangeText = (value) => {
    setSearchText(value)
  }

  //performing search from the popular movies list
  const handleSearch = () => {
    const formattedText = searchText.toLowerCase()
    const filteredData = movieResults.filter((item) => {
      return item.title.toLowerCase().includes(formattedText)
    }) 
    setMovieResults(filteredData)
  }  

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.titleStyle}>Settings</Text>
      <View style={styles.searchStyle}>
        <TextInput
          style={styles.input}
          color='#93c7a1'
          onChangeText={(text) => {
            setSearchText(text)
            handleSearch(text)
          }}
          value={searchText}
          placeholder='Search for a title..'
          placeholderTextColor="#93c7a1"
        />
        <Ionicons name="search" size={22} color="white" style={styles.iconStyle} onPress={handleSearch} />
      </View>
      <NowPlaying movieData={{ ...{ "movieList": movieResults }, ...{ "category": "search" } }} />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131212"
  },
  textStyle: {
    fontSize: 15,
    color: "white",
    marginBottom: 8,
    color: "white"
  },
  input: {
    borderColor: "green",
    padding: 20,
    borderRadius: 50,
    backgroundColor: "#232423",
    margin: 10,
  },
  searchStyle: {
    justifyContent: "center"
  },
  titleStyle: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
    marginTop: 10
  },
  iconStyle: {
    position: "absolute",
    right: 30,
    color: "#93c7a1"
  }
})

export default Search
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';
import { fetchMovieDetails, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from '../api/moviedb'
import NowPlaying from '../components/NowPlaying';
import UpComing from '../components/UpComing';
import TopRated from '../components/TopRated';
import nowPlaying from '../nowPlaying.json';

const HomeScreen = ({ navigation }) => {

    useEffect(() => {
        getPopularMovies()
    }, [])

    const [popularMovieData, setPopularMovieData] = useState({})
    const [topRatedMovieData, setTopRatedMovieData] = useState({})
    const [upcomingMovieData, setUpcomingMovieData] = useState({})

    const getPopularMovies = async () => {
    const popularMovies = await fetchPopularMovies()
    console.log('got popular movies: ', popularMovies)
    setPopularMovieData(popularMovies.results)
    
    const topRatedMovies = await fetchTopRatedMovies()
    console.log('got top rated movies: ', topRatedMovies)
    setTopRatedMovieData(topRatedMovies.results)

    const upcomingMovies = await fetchUpcomingMovies()
    console.log('got upcoming movies: ', upcomingMovies)
    setUpcomingMovieData(upcomingMovies.results)
    }

    // const getPopularMovies = async () => {
        // setPopularMovieData(nowPlaying[0].results)
        // setTopRatedMovieData(nowPlaying[0].results)
        // setUpcomingMovieData(nowPlaying[0].results)
    // }

    return (
        <ScrollView style={styles.main}>
            <View>
                <Image
                    source={{ uri: "https://m.media-amazon.com/images/I/71OHH9HaB5S._AC_UF1000,1000_QL80_.jpg" }}
                    style={{ height: 350, width: "100%", borderRadius: 20, margin: 5 }}
                />
            </View>
            <NowPlaying movieData={{...{"movieList": popularMovieData}, ...{"category": "Popular"}}} navigation={navigation}/>
            <UpComing movieData={{...{"movieList": topRatedMovieData}, ...{"category": "Top Rated"}}} />
            <TopRated movieData={{...{"movieList": upcomingMovieData}, ...{"category": "Upcoming"}}} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#131212"
    },
})

export default HomeScreen
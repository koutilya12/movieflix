import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';
import { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from '../api/moviedb'
import NowPlaying from '../components/NowPlaying';
import UpComing from '../components/UpComing';
import TopRated from '../components/TopRated';
import nowPlaying from '../nowPlaying.json';

const HomeScreen = ({ navigation }) => {

    useEffect(() => {
        // console.log('====>', nowPlaying[0].results)
        console.log('====>1', navigation)
        getPopularMovies()
    }, [])

    const [popularMovieData, setPopularMovieData] = useState({})
    const [topRatedMovieData, setTopRatedMovieData] = useState({})
    const [upcomingMovieData, setUpcomingMovieData] = useState({})

    // const getPopularMovies = async () => {
    // const popularMovies = await fetchPopularMovies()
    // console.log('got popular movies: ', popularMovies)
    // setPopularMovieData(popularMovies.results)
    // 
    // const topRatedMovies = await fetchTopRatedMovies()
    // console.log('got top rated movies: ', topRatedMovies)
    // setTopRatedMovieData(topRatedMovies.results)

    // const upcomingMovies = await fetchUpcomingMovies()
    // console.log('got upcoming movies: ', upcomingMovies)
    // setUpcomingMovieData(upcomingMovies.results)
    // }

    const getPopularMovies = async () => {
        setPopularMovieData(nowPlaying[0].results)
        setTopRatedMovieData(nowPlaying[0].results)
        setUpcomingMovieData(nowPlaying[0].results)
    }

    return (
        <ScrollView style={styles.main}>
            <View>
                <Image
                    source={{ uri: "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg" }}
                    style={{ height: 350, width: "100%", borderRadius: 20, margin: 5 }}
                />
            </View>
            <NowPlaying movieData={popularMovieData} navigation={navigation}/>
            <UpComing movieData={topRatedMovieData} />
            <TopRated movieData={upcomingMovieData} />
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
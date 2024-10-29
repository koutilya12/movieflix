import axios from 'axios';
import {apiKey} from '../constants'

const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/plain",
    },
  };

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    https: config
})

const popularMoviesEndpoint = `movie/popular?api_key=${apiKey}`
const topRatedMoviesEndpoint = `movie/top_rated?api_key=${apiKey}`
const upcomingMoviesEndpoint  = `movie/upcoming?api_key=${apiKey}`
// const searchEndPoint = `movie?api_key=${apiKey}&query=war`

const apiCall = async (endPoint, params) => {
    try {
        const response = await instance.get(endPoint)
        return response.data
    } catch (error) {
        console.log('error: ', error.response)
    }
}

//api get call for search operation directly from TMDB
//Axios request failed. 
// const apiSearchCall = async (endPoint) => {
    // try {
        // const resp = await axios.get(
            // `https://api.themoviedb.org/3/search/movie`, {
                // headers: {
                    // 'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer '+'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWFiY2IxOGM4M2RkNWUwNDdkYzlhNDlmNzQzZWFlNyIsIm5iZiI6MTczMDEzMjk0My40NzAwODcsInN1YiI6IjY3MWI2YTYzNmQ2YjcwNWRjODcxNTI5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0qC0ydEGRx5uyjRMedNISk659FjrVp21EK--xtG_XGo'
                // },
                // api_key: apiKey,
                // query: "war",
            // }
        // )
    // } catch (error) {
        // console.log('error: ', error)
    // }
// }

export const fetchPopularMovies = () => {
    return apiCall(popularMoviesEndpoint)
}

export const fetchTopRatedMovies = () => {
    return apiCall(topRatedMoviesEndpoint)
}

export const fetchUpcomingMovies = () => {
    return apiCall(upcomingMoviesEndpoint)
}

//search movies
// export const searchMovie = (movie) => {
    // movie = movie
    // return apiSearchCall(searchEndPoint)
// }
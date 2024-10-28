import axios from 'axios';
import {apiKey} from '../constants'

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/',
})

const popularMoviesEndpoint = `/popular?api_key=${apiKey}`
const topRatedMoviesEndpoint = `/top_rated?api_key=${apiKey}`
const upcomingMoviesEndpoint  = `/upcoming?api_key=${apiKey}`

const apiCall = async (endPoint, params) => {
    try {
        const response = await instance.get(endPoint)
        return response.data
    } catch (error) {
        console.log('error: ', error.response)
    }
}

export const fetchPopularMovies = () => {
    return apiCall(popularMoviesEndpoint)
}

export const fetchTopRatedMovies = () => {
    return apiCall(topRatedMoviesEndpoint)
}

export const fetchUpcomingMovies = () => {
    return apiCall(upcomingMoviesEndpoint)
}
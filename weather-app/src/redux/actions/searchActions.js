import axios from 'axios'
import { API_Key } from '../../APIkey';

export const SearchWeather = (text) => (
    {
      type: 'SEARCH_WEATHER',
      payload: text,      
    }
)

export const fetchWeather = (text) => (dispatch) => 
  {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&lang=ru&appid=${API_Key}`)
        .then(responce => {
            dispatch({
              type:'FETCH_WEATHER',
              payload: responce.data
            })
        })
        .catch(err => {
          console.log(err)
          dispatch({
            type: 'ERROR',
          })
        })
  }

  export const fetchForecast = (text) => (dispatch) => 
  {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${text}&exclude=daily&units=metric&lang=ru&appid=${API_Key}`)
        .then(responce => {
            dispatch({
              type:'FETCH_FORECAST',
              payload: responce.data
            })
        })
        .catch(err => {
          console.log(err)
          dispatch({
            type: 'ERROR',
          })
        })
  }

export const setLoading = () => (
  {
    type: 'LOADING'
  }
)

export const setError = () => (
  {
    type: 'ERROR'
  }
)
const initialState = {
    text: '',
    weatherData: '',
    loading: false,
    error: false,
}

const search = (state = initialState, action) => {
        console.log(state.weatherData)
        switch(action.type) {
            case 'SEARCH_WEATHER':
                return {
                    ...state,
                    text: action.payload,
                    loading: false,
                    error: false
                };
            case 'FETCH_WEATHER':
                return {
                    ...state,
                    weatherData: action.payload,
                    loading: false,
                    error: false
                }
            case 'LOADING':
                return {
                    ...state,
                    loading: true
                }
            case 'ERROR':
                return {
                    ...state,
                    error: true
                }
            default:
                return state 
        }
}

export default search;
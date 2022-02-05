const initialState = {
    text: '',
    weatherData: [],
    loading: false,
}

const search = (state = initialState, action) => {
        console.log(state.text)
        switch(action.type) {
            case 'SEARCH_WEATHER':
                return {
                    ...state,
                    text: action.payload,
                    loading: false
                };
            case 'FETCH_WEATHER':
                return {
                    ...state,
                    weatherData: action.payload,
                    loading: false
                }
            default:
                return state 
        }
}

export default search;
const SET_DATA = 'SET-DATA';


let initialState = {
    data: {
        main: {
            temp: 273.15
        },
        name: 'City',
        sys: {
            country: 'Country',
            sunrise: 1,
            sunset: 1,
        },
        wind: {
            deg: 360,
            speed: 1
        },
        weather: [{
            icon: '04d',
        }]
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
};

export const setDataAC = (data) => ({ type: SET_DATA, data: data });

export default reducer;
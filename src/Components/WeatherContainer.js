import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import WeatherApi from '../api/api';
import WeatherInfo from './WeatherInfo';
import { connect } from 'react-redux';
import { setDataAC } from '../redux/reducer';
import GetLocation from 'react-native-get-location';





const WeatherContainer = ({ data, setData }) => {
    const [latitude, setLatitude] = useState();
    const [longitude, setLongtitude] = useState();

    useEffect(() => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                let lat = Math.round(location.latitude);
                let lon = Math.round(location.longitude);
                setLatitude(lat);
                setLongtitude(lon);
                getWeatherByLocation(lat, lon);
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })

    }, [])

    const getWeatherByLocation = (latitude, longitude) => {
        WeatherApi.getWeatherByLocationApiCall(latitude, longitude).then(response => {
            setData(response.data)
        })
    };

    const getWeatherData = (cityName) => {
        WeatherApi.getWeatherApiCall(cityName).then(response => {
            setData(response.data);
        })
    }

    return (
        <View>
            <WeatherInfo getWeatherData={getWeatherData} weatherData={data} getWeatherByLocation={getWeatherByLocation}
                lat={latitude} lon={longitude} />
        </View>
    )
};



let mapStateToProps = (state) => {
    return {
        data: state.data,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setData: (data) => {
            dispatch(setDataAC(data))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);



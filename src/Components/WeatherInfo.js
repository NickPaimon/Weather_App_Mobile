import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity } from 'react-native';




const WeatherInfo = ({ getWeatherData, weatherData, getWeatherByLocation, lat, lon }) => {
  const [cityName, setCityName] = useState('');

  const onButtonPress = () => {
    getWeatherData(cityName);
  };

  const onIconPress = () => {
    getWeatherByLocation(lat, lon);
  };

  const getSunTime = (timeNumber) => {
    let date = new Date(timeNumber * 1000);
    let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    return time;
  }

  const sunrise = getSunTime(weatherData.sys.sunrise);
  const sunset = getSunTime(weatherData.sys.sunset);

  let icon = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  return (
    <View>
      <View style={styles.topBlock}>
        <Text style={styles.temp}>{((weatherData.main.temp) - 273.15).toFixed()}°</Text>
        <Text style={styles.text}>{weatherData.name}, {weatherData.sys.country} </Text>
        <Image style={styles.iconWeather} source={{ uri: icon }} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 80, marginTop: 50 }}>

        <TextInput value={cityName} onChangeText={(e) => setCityName(e)} placeholder="City Name" style={styles.input} />
        <TouchableOpacity
          onPress={onIconPress}
          style={styles.locationIcon}
        >
          <Image style={styles.icon} source={require('../icon/location-icon.png')} />
        </TouchableOpacity>

        <Button title="Find" onPress={onButtonPress} />
      </View>
      <View style={styles.alignResultIcons}>
        <Image style={styles.icon} source={require('../icon/sunrise.png')} />
        <Text style={styles.textResult}>   {sunrise}</Text>
      </View>
      <View style={styles.alignResultIcons}>
        <Image style={styles.icon} source={require('../icon/sunset.png')} />
        <Text style={styles.textResult}>   {sunset}</Text>
      </View>


    </View>
  )
};





const styles = StyleSheet.create({
  topBlock: {
    marginTop: 32,
    alignItems: 'center'
  },
  temp: {
    fontSize: 110,
  },
  text: {
    fontSize: 20,
    margin: 5,
    padding: 5,
    textAlign: 'center',
  },
  iconWeather: {
    height: 44,
    width: 44,
    marginTop: 20
  },
  icon: {
    height: 24,
    width: 24,
  },
  input: {
    width: 200,
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 5
  },
  textResult: {
    fontSize: 16
  },
  alignResultIcons: {
    flexDirection: 'row',
    alignItems: 'center'
  }

});


export default WeatherInfo;



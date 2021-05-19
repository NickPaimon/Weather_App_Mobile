import React from 'react';
import { StyleSheet, View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { Provider } from 'react-redux';
import WeatherContainer from './src/Components/WeatherContainer';
import store from './src/redux/redux-store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <LinearGradient
          colors={['#544a7d', '#ffd452']}
          style={styles.linearGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }} >
          <View>
            <WeatherContainer />
          </View>
        </LinearGradient>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: 'SF Pro',
  },
  linearGradient: {
    height: '100%',
    width: '100%',
    padding: 50,
  },
});

export default App;

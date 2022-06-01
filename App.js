import React from 'react'
import EarthquakeStackNavigator from "./src/Navigation/EarthquakeStackNavigator"
import EarthquakeStore from './src/store/EarthquakeStore';
import { Provider } from 'react-redux';
export default function App()
{
  return(
    <Provider store={EarthquakeStore}>
    <EarthquakeStackNavigator/>
    </Provider>
  )
}
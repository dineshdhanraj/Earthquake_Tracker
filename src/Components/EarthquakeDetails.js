import React from 'react'
import {Text,View} from 'react-native'
import styles from './Styles';
import { ItemDetailsSelector } from '../selectors/EarthquakeSelectors';
import { useSelector } from 'react-redux';

export default function EarthquakeDetails()
{
const itemData=useSelector((state)=>ItemDetailsSelector(state));
return(
<View style={styles.Details}> 
<View>
<Text style={styles.TextStyle} testID='Place_Id'>Place: {itemData.properties.place}</Text>
<Text style={styles.TextStyle} testID='Magnitude_Id'>Magnitude: {itemData.properties.mag}</Text>
<Text style={styles.TextStyle} testID='Latitude_Id'>Latitude: {itemData.geometry.coordinates[1]}</Text>
<Text style={styles.TextStyle} testID='Longitude_Id'>Longitude: {itemData.geometry.coordinates[0]}</Text>
<Text style={styles.TextStyle} testID='Tsunami_Id'>Number Of Tsunami Triggered: {itemData.properties.tsunami}</Text>
</View>
</View>
)
}


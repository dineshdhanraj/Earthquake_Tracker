import React, { useEffect } from 'react'
import {Text,View,FlatList,TouchableWithoutFeedback} from 'react-native'
import MainUrl from '../Config/EarthquakeUrl';
import styles from './Styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { useDispatch,useSelector } from 'react-redux';
import {EarthquakeAction} from '../actions/EarthquakeActions'
import * as Actions from "../constants/Earthquakeconstants"
import { ListingSelector,ErrorSelector } from '../selectors/EarthquakeSelectors';

function EarthquakeTrackerApp(){

const list=useSelector((state)=>ListingSelector(state));
const errorDetails=useSelector((state)=>ErrorSelector(state));
const dispatch=useDispatch();
const navigation = useNavigation();

useEffect(()=>{
        dispatch(EarthquakeAction(MainUrl()));
},[])

const ListDetails=({item})=>
{ 
      return(  
      <TouchableWithoutFeedback testID="NavigationOnPress" onPress={()=>{ dispatch({type:Actions.ItemDetails,payload:item}),navigation.navigate('EarthquakeDetailsScreen')}}>
      <View style={styles.seperator}> 
      <View style={ styles.TitleView}>
      <Text style={styles.Title } testID='TitleId'>Title: {item.properties.title}</Text>
      <Text style={styles.Mag} testID='MagnitudeId'>Magnitude: {item.properties.mag}</Text>
      </View>
      <View style={styles.IconView}><Icon style={styles.Arrow} name="arrow-forward-ios" size={25} /></View>
      </View>
      </TouchableWithoutFeedback>
      )
} 

return(
        <View style={styles.Margin}>
        {errorDetails!=""?<Text testID="Error" style={styles.Error}>{errorDetails}</Text>:(<FlatList
        data={list}
        testID="ListId"
        renderItem={ListDetails}
        keyExtractor={item => item.properties.code}
      />)}
        </View>
    );
}
export default EarthquakeTrackerApp;
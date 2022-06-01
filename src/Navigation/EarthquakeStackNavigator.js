import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EarthquakeDetails from "../Components/EarthquakeDetails";
import EarthquakeTrackerApp from "../Components/EarthquakeTrackerApp";
import { ItemDetailsSelector } from "../selectors/EarthquakeSelectors";
import { useSelector } from "react-redux";
const Stack=createNativeStackNavigator();

export const EarthquakeStackNavigator=()=>{

const itemDetails=useSelector((state)=>ItemDetailsSelector(state));

return(
<NavigationContainer>
    <Stack.Navigator >
    <Stack.Screen name={"EarthquakeTrackerApp"} component={EarthquakeTrackerApp} options={{title:'Earthquake Tracker',headerTitleAlign:'center',headerStyle:{backgroundColor:'white'},headerTitleStyle:{fontSize:25,fontWeight:'bold'}}}/>
        <Stack.Screen name={"EarthquakeDetailsScreen"} component={EarthquakeDetails} options={()=>({ title:itemDetails.properties.title,
          headerTitleStyle: {
           fontSize:14
          },
          headerStyle: {
            backgroundColor: '#f4511e',
          }})}/>
        </Stack.Navigator>
</NavigationContainer>
    )
}

// export default EarthquakeStackNavigator;
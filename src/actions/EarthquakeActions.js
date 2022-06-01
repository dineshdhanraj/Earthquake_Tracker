import Service from "../Service/EarthquakeService"
import * as Actions from "../constants/Earthquakeconstants"

export const EarthquakeAction=(url)=>async(dispatch)=>{

    const list=await Service(url);
   
    if(list.ErrorMessage)
    dispatch({type:Actions.ErrorData,payload:list.ErrorMessage})
    else
    {
    dispatch({type:Actions.ErrorData,payload:""})
    dispatch({type:Actions.DetailsData,payload:list})
    }
}


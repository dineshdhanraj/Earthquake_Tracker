import * as Actions from "../constants/Earthquakeconstants"

 const initialDetails={
   Data:"",
   Listing:"",
   ErrorMessage:""
}

export const EarthquakeReducer=(state=initialDetails,action)=>
{
    switch(action.type)
    {
          case Actions.DetailsData:
            return {...state, Data:action.payload};
          case Actions.ErrorData: 
            return {...state, ErrorMessage:action.payload};
          case Actions.ItemDetails: 
            return {...state, Listing:action.payload};  
          default:
            return state;     
    }
    
}
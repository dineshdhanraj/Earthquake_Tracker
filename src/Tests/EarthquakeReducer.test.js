import {EarthquakeReducer} from "../reducer/EarthquakeReducer";
import * as Actions from "../constants/Earthquakeconstants"

const initialState = {
  Data: {},
  Error: '',
  Listing:{},
};

  it('Testing Original Data Case', () => {
    const DummyData = {metadata:{mag:0.9},properties:{features:[{place:'Hyderabad'}]}};
    const result = EarthquakeReducer(initialState, {type:Actions.DetailsData, payload: DummyData});
    expect(result.Data.metadata.mag).toEqual(0.9);
  });

  it('Testing Error Case', () => {
    const message="Error In Fetching Data"
    const result = EarthquakeReducer(initialState, {type:Actions.ErrorData, payload: message});
    expect(result.ErrorMessage).toStrictEqual(message);
  });
  
  it('Testing Original Item Details Case', () => {
    const DummyData = {metadata:{mag:0.9},properties:{features:[{place:'Hyderabad'}]}};
    const result = EarthquakeReducer(initialState, {type:Actions.ItemDetails, payload: DummyData});
    expect(result.Listing.metadata.mag).toEqual(0.9);
  });


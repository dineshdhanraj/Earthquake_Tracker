import React from 'react';
import * as redux from 'react-redux';
import { EarthquakeAction } from '../actions/EarthquakeActions';
import EarthquakeTrackerApp from '../Components/EarthquakeTrackerApp';
import TestRenderer,{act} from 'react-test-renderer';

const mockNavigate = jest.fn();
const mockDispatch=jest.fn();
jest.mock('../actions/EarthquakeActions');
jest.mock('@react-navigation/native', () => (
{ useNavigation: () => ({ navigate: mockNavigate }) }));

afterEach(() => {
  jest.clearAllMocks();
});

const DispatchMock = jest.spyOn(redux, 'useDispatch'); 
const SelectorMock = jest.spyOn(redux,'useSelector');

const dummyDataSet =[{"properties":{"code":""}}]

it('When Api Data fetches Successfully', async () => {
 DispatchMock.mockReturnValue(mockDispatch);
 SelectorMock.mockReturnValueOnce(dummyDataSet);
 SelectorMock.mockReturnValueOnce("");
 EarthquakeAction.mockReturnValue("");
 var tree;
 await act(async () => {
 tree = TestRenderer.create(
 <EarthquakeTrackerApp />
 )})
 const instance=tree.root;
 expect(instance.findByProps({testID:'ListId'})).toBeTruthy();
})

it('When Api crashes', async () => {
 DispatchMock.mockReturnValue(mockDispatch);
 SelectorMock.mockReturnValueOnce(dummyDataSet);
 SelectorMock.mockReturnValueOnce("Rejected");
 var tree;
 await act(async () => {
 tree = TestRenderer.create(
 <EarthquakeTrackerApp />
 );
 });
 const instance=tree.root;
 expect(instance.findByProps({testID:'Error'})).toBeTruthy();
})

it('Test for checking the navigation calling', async () => {
  DispatchMock.mockReturnValue(mockDispatch);
  SelectorMock.mockReturnValueOnce(dummyDataSet);
  SelectorMock.mockReturnValueOnce("");
  var tree;
  await act(async () => {
  tree = TestRenderer.create(
  <EarthquakeTrackerApp />
  );
  });
 //console.log(tree.toJSON().children[0]);
  const instance = tree.root;
  expect(mockNavigate).toHaveBeenCalledTimes(0);
  const wrapper = instance.findAllByProps({testID: 'NavigationOnPress'});
  await act(async () => {
  wrapper[0].props.onPress();
  });
  expect(mockNavigate).toHaveBeenCalledTimes(1);
})



// const Dummy_Data_Set1 = {"Data":{"type":"FeatureCollection","metadata":{"title":"Hyderabad Earthquakes"},
// "features":[{"properties":{"mag":0.9,"place":"Hyderabad","tsunami":0,"code":"0217tjeow6","title":"Hyderabad"},
// "geometry":{"coordinates":[-152.458,60.4906,95.6]}
// }
// ]},"Error_Message":""}

// const Dummy_Data_Set2 = {"Data":[],"Error_Message":"Rejected"}
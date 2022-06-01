import React from 'react';
import TestRenderer, {act} from 'react-test-renderer';
import EarthquakeDetails from '../Components/EarthquakeDetails';
import * as redux from 'react-redux';

const dummyDataSet =  {"geometry": {"coordinates": [15,16]},"properties": { "code": "123",
"mag": 0.9, "place": "Hyderabad","title": "Hyderabad Map", "tsunami": 100,}}

const SelectorMock = jest.spyOn(redux,'useSelector');

it('Test for checking 2nd screen', async () => {
SelectorMock.mockReturnValueOnce(dummyDataSet);
  var tree;
  await act(async () => {
    tree = TestRenderer.create(<EarthquakeDetails />);
  });
  const instance = tree.root;
  expect(instance.findByProps({testID: 'Place_Id'})).toBeTruthy();
  expect(instance.findByProps({testID: 'Magnitude_Id'})).toBeTruthy();
  expect(instance.findByProps({testID: 'Latitude_Id'})).toBeTruthy();
  expect(instance.findByProps({testID: 'Longitude_Id'})).toBeTruthy();
  expect(instance.findByProps({testID: 'Tsunami_Id'})).toBeTruthy();
});


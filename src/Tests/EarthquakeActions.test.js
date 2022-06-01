import Service from '../Service/EarthquakeService';
import { EarthquakeAction } from '../actions/EarthquakeActions';

const dummyDataSet1 = {"Data":"FeatureCollection"}
const dummyDataSet2 = {"ErrorMessage":"Rejected"}

jest.mock('../Service/EarthquakeService');
const mockDispatch = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

it('When Data Fetches Correctly', async () => {
Service.mockReturnValueOnce(dummyDataSet1);
await EarthquakeAction("")(mockDispatch);
  expect(mockDispatch).toHaveBeenCalledTimes(2);
});

it('When Data Fetches Wrongly', async () => {
  Service.mockReturnValueOnce(dummyDataSet2);
  await EarthquakeAction("")(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });


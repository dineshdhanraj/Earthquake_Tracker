import Service from '../Service/EarthquakeService';
import mockAxios from 'axios'

jest.mock('axios')

it('Testing For Successful API call', async () => {
    const NewData = {metadata:{mag:0.9},properties:{features:[{place:'Hyderabad'}]}};
    mockAxios.get.mockResolvedValue({data:NewData});
    const result = await Service();
    expect(result).toStrictEqual(NewData);
    
  });

  it('Testing For Failure API call', async () => {
      const Error={
        ErrorMessage: 'Error In Fetching Data',
    };
    mockAxios.get.mockRejectedValue();
    const result=await Service();
    expect(result).toStrictEqual(Error);
  });
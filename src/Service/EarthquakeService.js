import axios from 'axios'
export default async function Service(url) {

  try{
  const res = await axios.get(url);
  const ans = res.data;
  return ans;
  }
  catch(error)
  {
    return {ErrorMessage: 'Error In Fetching Data'}; 
  }
  
}

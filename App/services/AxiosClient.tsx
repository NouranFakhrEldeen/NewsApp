import axios from 'axios';

const ApiKey = '40674bcc3cbe4d029c3dbfc8b5ae0c23';

export async function AxiosClient<T>(): Promise<T> {
  const {data} = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${ApiKey}`,
  );
  
  return data;
  
}

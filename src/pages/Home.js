import { useEffect, useState } from 'react'
import PersonsList from './PersonsList'

  
export default function Home() {
  const [data, setData]=useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect (()=>{
    fetch ('http://icloudjo.com:8050/REST/persons/')
    .then(res => res.json()) 
    .then(data => {
      setData(data.data);
      setLoading(false);
    })
 
});
  return <div className='home'>
  <h1>Welcome</h1>
  {loading && <div>Loading...</div>}
      {data && (
        <PersonsList
          user={data}
         
        />
      )}

  </div>
}

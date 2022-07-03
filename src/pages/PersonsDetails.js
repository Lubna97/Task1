import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'

const PersonsDetails = () => {
  const [data, setData]=useState(null);
  const [isPending, setLoading] = useState(true);
  const { id } = useParams();
  const [error, setError] = useState(null);
  

  useEffect (()=>{
    fetch ('http://icloudjo.com:8050/REST/persons/'+id)
    .then(res => res.json()) 
    .then(data => {
      setData(data.data);
      setLoading(false);
    })
 
});

  return (
    <div className="persons-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { data && data.map((data,index)=>(
      <article key={index}>
      
        
          <h2>{ data.first_name }</h2>
          <p> { data.middle_name }</p>
          <p> { data.last_name }</p>
          <p> { data.email }</p>
          <div>{ data.description }</div>
        </article>)
      )}
  
    </div>
  );
}
 
export default PersonsDetails;
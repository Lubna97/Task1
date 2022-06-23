
import { useEffect, useState } from 'react';
import OurList from './components/OurList';

function App() {


  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json()) 
      .then(data => {
        setComments(data);
        setLoading(false);
      })
      .catch(e => console.log(e.message));
    return () => {}; 
  }, [name]);

  return (
    <div className='App'>
  
      {}
      {loading && <div>Loading...</div>}
      {comments && (
        <OurList 
        todos={comments}

        />
      )}
    </div>
  );
}

export default App;

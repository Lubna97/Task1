import { Link } from "react-router-dom";

const PersonsList = ({ ...props }) => {
    const {user:persons} = props;
    return (
      <div className='list'>
       
        {persons.map(persons => (
          <div className="persons-preview" key={persons.id}>
            <Link to={`/persons/${persons.id}`}>
            <h2> {persons.first_name} </h2>
            
            </Link>
             
   
            
          
          </div>
        ))}
      </div>
    );
  };
  
  export default PersonsList;
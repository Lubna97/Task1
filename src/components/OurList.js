const OurList = ({ ...props }) => {
  const { todos: todo} = props;
  return (
    <div className='list'>
    
      {todo.map(data => (
        <div key={data.id}>
          <p>
            {data.title} 
            <br />
            {data.completed}
          </p>
    
        </div>
      ))}
    </div>
  );
};

export default OurList;

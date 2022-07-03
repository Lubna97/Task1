import {useState} from "react";
export default function Add() {
  const[first_name, setTitle]=useState('');
  const[middle_name, setMname]=useState('');
  const[last_name, setLname]=useState('');
  const[email, setEmail]=useState('');
  const[description, setTextarea]=useState('');
  //const[title, setTitle]=useState('');
  const handleSubmit = (e)=>{
    //e.preventDefault();
    const persons ={first_name,middle_name,last_name,email,description};

    fetch('http://icloudjo.com:8050/REST/persons/',{
      method:'POST',
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify(persons)

    })
  }
  return (
<div className="create">
<h2>New User!</h2>
<form onSubmit={handleSubmit}>
<label>First Name</label>
<input type="text" required value={first_name}
onChange={(e)=>setTitle(e.target.value)}
/>

<label>Middle Name</label>
<input type="text" required value={middle_name}
onChange={(e)=>setMname(e.target.value)}
/>

<label>Last Name</label>
<input type="text" required value={last_name}
onChange={(e)=>setLname(e.target.value)}
/>

<label>Email</label>
<input type="email" required value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<label>Description</label>
<textarea rows="3" value={description}
onChange={(e)=>setTextarea(e.target.value)}
></textarea>

<button>Submit</button>
</form>

</div>

  )
}

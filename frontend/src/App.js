import { useState } from "react"
import axios from "axios"

const App = () => {

  const [name ,setName] = useState('');
  const [value , setValue] = useState('');

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try
    {
      const response = await axios.post('http://localhost:5000/api/data/add',{name,value});
      alert('Data submitted successfully:'+ JSON.stringify(response.data));
      setName('');
      setValue('');
    } 
    catch(error)
    {
      alert('Error submitting data :'+ error.response.data);
    }

  }

  return (
    <div className="App">
      <h1>Joi Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name :</label>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required />
        </div>
        <div>
          <label>Value :</label>
          <input type="number" value={value} onChange={(e)=>setValue(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>

      </form>
      
    </div>
  )
}

export default App

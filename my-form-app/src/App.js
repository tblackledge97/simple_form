import './App.css';
import { use, useState } from 'react';



function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [agency, setAgency] = useState("");

  // this is to send data to a server
  // doesnt work currently but this is the implementation
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = { name, description, agency }

    try {
      const response = await fetch("path/to/API", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("HTTP error")
      }

      const resutl = await response.json()
    } catch (error) {
      console.error("error", error);
    }
  }

  return (
    <div className="App">
      <h1>Tender Form</h1>
      <form className="table">

          <label>Tender Name:
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            /><br />
          </label>


          <label>Tender Decription:
            <input 
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            /><br />
          </label>

          <label>Tender Agency:
            <input
              type="text"
              value={agency}
              onChange={(e) => setAgency(e.target.value)}
            /><br />
          </label>

      </form>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}



export default App;

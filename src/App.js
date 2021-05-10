import './App.css';
import React, { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("Chester");
  const [input, setInput] = useState("");
  useEffect(() => {
    handleFetch();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [search]);
  const handleFetch = async () => {
    const response = await fetch(
  `http://api.openweathermap.org/data/2.5/weather?q=${search},GB&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();
  setData(data);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(input);
    setInput("");
  };
    if (loading) return <h1>Loading...</h1>;
    return ( 
      <div id="main">
        <h2>Name: {data.name}</h2>
        <p>Temp: {data.main.temp}&#730; C</p>
        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind Speed: {data.wind.speed}</p>
        <p>Pressure: {data.main.pressure}</p>
        <form onSubmit={handleSubmit}>
         <input
          type="text"
          name="search"
          placeholder="Enter city name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      </div>
  
    );
    
}

export default App;
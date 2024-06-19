import React, { useEffect, useState } from "react";
import "../styles/TemperatureApp.css";
import { MdLocationPin } from "react-icons/md";

export default function TemperatureApp() {
  const [place, setPlace] = useState("London");
  const [cityData, setCityData] = useState();

  const fetchApi = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=72a6f8f8363f8648e6ce995cd49b1bcf`;
    const response = await fetch(url);
    const data = await response.json();
    setCityData(data);
    console.log(data);
  };

  

  useEffect(() => {
    fetchApi();
  }, [place]);

  return (
    <div>
      <div className="box">
        <div className="inputBox">
          <input
            type="search"
            className="input-field-city"
            placeholder="Enter a city...."
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          ></input>
        </div>


        {cityData && cityData.main?
        ( <div className="temp-info">
          <div className="info">
            <MdLocationPin
              className="MdLocationPin"
              size={50}
              color="green"
            />
            <h1>{place}</h1>
          </div>
          <div className="answer-info">
            <h1>{cityData.main.temp}°C</h1>
            <h3>
              Min:{cityData.main.temp_min}°C | Max:{cityData.main.temp_max}°C
            </h3>
          </div>
        </div>)
      :
      (<div>No data found</div>)
      }

         

      </div>
    </div>
  );
}

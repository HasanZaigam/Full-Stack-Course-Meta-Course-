import React, {useState} from 'react'

// Child 1: Celsius Input
function CeliusInput({temperature, onTemperatureChange}){
        return(
            <div>
                <label>
                    Celius :
                </label>
                <input
                    value = {temperature}
                    onChange = {(e) => onTemperatureChange(e.target.value)}
                />
            </div>
        )
    }

    // Child 2: Fahrenheit Input
    function FahrenheitInput({temperature, onTemperatureChange}){
        return(
            <div>
                <label>
                    Fahrenheit :
                </label>
                <input 
                    value={temperature}
                    onChange={(e) => onTemperatureChange(e.target.value)}
                />
            </div>
        )
    }

// Parent Component — State lifted up here
const TemperatureConverter = () => {
    
    const [temperature, setTemperature] = useState("0");
    const [scale, setScale] = useState("c");

    const toCelius = (f) => ((f-32) * 5) / 9;
    const toFahrenhiet = (c) => ((c * 9) / 5) + 32;

    const handleCeliusChange = (value) => {
        setScale("c");
        setTemperature(value);
    }

    const handlefahrenheitChange = (value) => {
        setScale("f");
        setTemperature(value);
    }

    const celius = scale === "f" ? toCelius(temperature) : temperature;
    const fahrenheit = scale === "c" ? toFahrenhiet(temperature) : temperature;



  return (
    <div>
        <h2>Temperature Converter Component</h2>
        <CeliusInput temperature={celius} onTemperatureChange={handleCeliusChange} />
        <FahrenheitInput temperature={fahrenheit} onTemperatureChange={handlefahrenheitChange} />
    </div>
  )
}

export default TemperatureConverter;
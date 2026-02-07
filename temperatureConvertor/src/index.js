import React , {useState} from "react";
import ReactDOM from "react-dom/client"

function TemperatureConvertor(){
    const [celsius,setCelsius] = useState("");
    const [fahrenheit,setFahrenheit] = useState("");

    // Celcius->Fahrenheit
    const handleCelsiusChange = (value) =>{
        setCelsius(value);
        if(value===""){
            setFahrenheit("");
            return;
        }
        const num = parseFloat(value)
        if(!isNaN(num)){
            const f = (num * 9)/5+32
            setFahrenheit(f.toFixed(2))
        }
    }

    //Fahrenheit -> Celsius
    const handleFahrenheitChange = (value)=>{
        setFahrenheit(value)

        if(value===""){
            setCelsius("")
            return
        }

        const num = parseFloat(value);
        if(!isNaN(num)){
            const c = ((num-32)*5)/9
            setCelsius(c.toFixed(2))
        }
    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-xl p-8 w-[350px]">
                <h2 className="text-2xl font-semibold text-center mb-6">Temperature Convertor</h2>
                
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-1">Celsius</label>
                    <input type="number"
                     value={celsius}
                     onChange={(e)=>handleCelsiusChange(e.target.value)}
                     placeholder="Enter Celcius"
                     className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                     ></input>
                </div>
                 <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Fahrenheit (°F)
          </label>
          <input
            type="number"
            value={fahrenheit}
            onChange={(e) => handleFahrenheitChange(e.target.value)}
            placeholder="Enter Fahrenheit"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<TemperatureConvertor/>)
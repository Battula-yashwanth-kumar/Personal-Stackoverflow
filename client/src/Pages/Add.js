import React, { useState } from 'react'
import  axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Add =()=>{
    const navigate=useNavigate();
    const [Name,setName]=useState("");
    const[Error, setError]=useState("");
    const[Solution, setSolution]=useState("");
    const handleSubmit = async () => {
        try {
            let result = await axios.post('https://localhost:5000/addError', {
                body: JSON.stringify({
                    Name,
                    Error,
                    Solution
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        
            // Assuming the response data is in JSON format
            const responseData = await result.json();
            console.warn(responseData);
            console.log(responseData);
        } catch (error) {
            console.log("Request error:", error);
        }
    }
        
    
    return (
        <div>
            <form >
                <input type ="text" placeholder='Enter your name' name={Name} onChange={(e)=>{setName(e.target.value)}}

                 />
                <textarea placeholder='Enter the error' name={Error} onChange={(e)=>{setError(e.target.value)}}>

                </textarea>
                <textarea placeholder='Enter the solutions to the error' name={Solution} onChange={(e)=>{setSolution(e.target.value)}}>

                </textarea>
                <button onClick={handleSubmit}> Submit</button>
            </form>

        </div>
    )
}
export default Add;
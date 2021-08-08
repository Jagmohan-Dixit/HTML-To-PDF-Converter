import React from 'react';
import { useEffect, useState} from 'react';
import './style.css';

const Api = () => {

    const [system, setSystem] = useState(null);
    // const [link, setLink] = useState(null);
    const [data, setData] = useState(null);
    const [ur, setUr] = useState("");
    var link = "";

    useEffect ( () => {

        const fetchApi = async () => { 

            const url = `https://api.html2pdf.app/v1/generate?url=${ur}&apiKey=VY9S9g3ULJ8cCxl5fREqcSb2lVenB1A44o2MpP5ZWtw0KeAavi65w4QtCracmyA5`;
            const response = await fetch(url);
            const resjson = await response.json();
            // console.log(resjson);
            setData(resjson);
            // setSystem(resjson.sys);
     
        };
        fetchApi();
    }, [])
    
    console.log(link);
    {link = `https://api.html2pdf.app/v1/generate?url=${system}&apiKey=VY9S9g3ULJ8cCxl5fREqcSb2lVenB1A44o2MpP5ZWtw0KeAavi65w4QtCracmyA5`}{link = `https://api.html2pdf.app/v1/generate?url=${system}&apiKey=VY9S9g3ULJ8cCxl5fREqcSb2lVenB1A44o2MpP5ZWtw0KeAavi65w4QtCracmyA5`}

    return (
        <div>
            <h1 className="heading">HTML To PDF Converter</h1>
            <div className="datesearch">
                <input type="search" className="inputfield" placeholder="      Enter html link to convert in pdf.."
                 onChange = { (event) => { setSystem(event.target.value)}} />
                 
            </div>
            
            
            <div className="button">
                <button className="button-smart"><a href={link} className="submit">Submit</a></button>
            </div>
            
        </div>
    )
}

export default Api

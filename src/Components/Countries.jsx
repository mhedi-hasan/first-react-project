import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country/Country";
import './Countries/Countries.css'

const Countries = () => {
    const [countries,setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags,setVisitedFlags] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    })
    const handleVisitedCountry = country =>{
        console.log('Add this to your visited country.');
        const newVisitedCountries = [...visitedCountries,country]
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag =>{
        const newvisitedFlag=[...visitedFlags,flag]
        setVisitedFlags(newvisitedFlag)
    }

    // remove item from an array in a state
    // use filter to select all the element except the one you want to remove
    

return (
    <div>
        <h3 className="country-name">Countries : {countries.length}</h3>
        {/* Visited Country */}
        <div className="country-name">
            <h4>Visited Countries : {visitedCountries.length}</h4>
            <ol className="ul-name">
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ol>
        </div>
        <div className="flag-container">
            {
                visitedFlags.map((flag,idx) => <img key={idx} src={flag}></img>)
            }
        </div>
        {/* Display Country */}
        <div className="country-container">
            {
                countries.map(country =><Country 
                key={country.cca3}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
                country={country}></Country>)
            }
        </div>
        </div>
    );
};

export default Countries;
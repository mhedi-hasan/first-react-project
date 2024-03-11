import { useState } from 'react';
import './Country.css';
const Country = ({country,handleVisitedCountry}) => {
    const {name, flags, area, population, cca3} = country;
    const [visited, setVisited] = useState(false)

    const handleVisited = () =>{
        setVisited(!visited)
    }

    console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited ? 'visited':'non-visited'}`}>
            <h3 style={{color:visited ? 'purple':'orange'}}> {name.common}</h3>
            <img className='countryImg' src={flags.png} alt="" />
            <div className='countryStyle'>
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p>Code : {cca3}</p>
            <button onClick={() =>handleVisitedCountry(country)} className='countryButton'>Mark Visited</button> <br />
            {visited ? 'I have visited this country.':'I want to visited'} <br />
            <button onClick={handleVisited} className='countryButton'>{visited ? 'Visited':'Going'}</button><br />
            </div>
        </div>
    );
};

export default Country;
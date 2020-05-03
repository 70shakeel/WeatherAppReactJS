import React from 'react'
const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
const Weather = (props) => {
return(
    <div className='container text-light'>
        <div className="cards pt-4">
            <h1>
                {props.city}
            </h1>
    
            <h5 className="py4 pt-4">
                <i className={`wi ${props.weatherIcon} display-3`}></i>
            </h5>

            {props.temp_celcius ? (
                
<h1 className="py2 pt-3">{props.temp_celcius}&deg;</h1>

            ):null}
            
        </div>
        
{/**show max and min temperature */}
        {minmaxTemp(props.temp_min,props.temp_max)}
        
            <h3 className="py-3">{capitalize(props.description)}</h3>
    </div>

);
};
function minmaxTemp(min,max){

    if(min && max){
        
    
    return(
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    );
    }
}

export default Weather;
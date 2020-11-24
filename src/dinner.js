import React from 'react'

function Dinner(props) {
    return(
        <div>
            <h1>Hi, I am Nabeel from {props.cityName}, {props.countryName}</h1>
            <h1>and</h1>
            <h1>I feel happy to learn {props.languageName} from {props.teacherName}</h1>
            <h1>It's amazing to be part of this BootCamp</h1>
        </div>
    )
}

export default Dinner;
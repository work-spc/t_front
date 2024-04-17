import React, { useState } from 'react';
import './Test.css'


export const SetProfile = ({func}) => {

    const [Age,setAge] = useState();
    const [err,setErr] = useState(false);
    const [Height,setHeight] = useState();
    const [Weight,setWeight] = useState();
    const merge = (Age,Height,Weight) => {
        if (Age != null & Height != null & Weight != null){
            const props = {
                Age,
                Height,
                Weight
            }
            func(props)
        } else setErr(true);
    }
    
    return (
        <>
        <div className="profile_container">
            <h2>Укажите ваши данные:</h2>
            <div className="profile_inputs">
                <div className="profile_input">
                    <h3>Возраст:</h3>
                    <input onChange={(event) => setAge(event.target.value)} name="age" id="age"></input>
                </div>
                <div className="profile_input">
                    <h3>Рост:</h3>
                    <input onChange={(event) => setHeight(event.target.value)} name="height" id="height"></input>
                </div>
                <div className="profile_input">
                    <h3>Вес:</h3>
                    <input onChange={(event) => setWeight(event.target.value)} name="weight" id="weight"></input>
                </div>
                
            </div>
            <a className={(err ? 'red':'test-disable')}>Необходимо указать все данные</a>
        </div>
        <div type="submit" className="profile_btn" onClick={() => merge(Age,Height,Weight)}><button>Далее</button></div>
        </>
    )
}
export default SetProfile;

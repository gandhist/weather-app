import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";
import DateTime from "./DateTime";
import Error from "./Error";
import axios from 'axios';
import Context from '../Context';


const Main = () => {
    const [city, setCity] = useState()
    const [weather, setWeather] = useState()
    const [error, setError] = useState()
    const api_call = async e => {
        e.preventDefault();
        // console.log(e.target.element)
        const lokation = e.target.elements.lokation.value
        if (!lokation) return setError("Nama kota tidak boleh kosong!"), setWeather(null)
        const API_KEY = "2e942b83c10db0117ba395dec62bd40c"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${lokation}&appid=${API_KEY}&units=metric`;
        const request = await axios.get(url)
        const response = await request
        console.log(response.data)
        setWeather(response.data)
        setCity(response.data.name)
        setError(null)
    }

    // useEffect(() => {
    //     api_call()
    // }, [])
    return (
        <div className="main" >
            <Header />
            <Content>
                <DateTime />
                <Context.Provider value={{ api_call, weather, city }}>
                    <WeatherSearch />
                    {weather && <WeatherData />}
                    {error && <Error error={error} />}

                </Context.Provider>
            </Content>
        </div>
    )
}

export default Main
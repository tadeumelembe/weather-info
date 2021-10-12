import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { create } from 'apisauce'
import { Row, Col, Spinner, Container } from 'react-bootstrap';
import DailyWeather from '../Components/DailyWeather'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Search from '../Components/Search';
const api = create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    headers: { Accept: 'application/vnd.github.v3+json' },
})

export default function Weather() {
    let { address, lat, lng } = useParams();
    const [loadingWeather, setLoadingWeather] = useState(true);
    //const [address, setAddress] = useState(null);
    const [weatherInfo, setWeatherInfo] = useState(null);


    function convertTimestamp(timestamp) {
        var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
            dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),     // Add leading 0.
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh == 0) {
            h = 12;
        }

        // ie: 2014-03-24, 3:00 PM
        time = dd + '-' + mm + '-' + yyyy + ', ' + h + ':' + min + ' ' + ampm;
        return time;
    }

    const getWeather = () => {
        setLoadingWeather(true)
        api
            .get(`/onecall?lat=${lat}&lon=${lng}&exclude=hourly,minutely,alerts&appid=41dd22a7dd63c54afb6b91e5144b8c63&units=metric&lang=pt`)
            .then((response) => {
                console.log(response.data.daily)
                if (response.status = '200') {
                    setWeatherInfo(response.data)
                } else {
                    setWeatherInfo('')
                }
            })
            .catch((err) => { console.log(err) })
            .finally(() => { setLoadingWeather(false); })
    }

    useEffect(() => {

        getWeather()

    }, [])

    return (
        <div>
            <div style={{ minHeight: 60, backgroundColor: '#20232a' }}>
                <Container className="px-5 py-2">
                    <Row className="justify-content-center w-full">
                        <Col xs={12} sm={12} md={6} className="d-flex">
                        <Link style={{textDecoration:'none'}} to="/about"><ArrowBackIcon style={{color:'#fff',fontSize:40}}/></Link>

                            
                        </Col>
                        <Col xs={12} sm={12} md={6} className="text-left mr-0">
                            <h1 className="text-white d-none">Weater</h1>
                        </Col>
                    </Row>
                </Container>
            </div>


            {loadingWeather ?
                <>
                    <Container className="mx-auto pt-5">
                        <div className="mx-auto text-center">
                            <Spinner animation="border" style={{ width: '3rem', height: '3rem' }} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    </Container>

                </> :
                <>
                    {weatherInfo ?
                        <>
                            <div className="pt-5">
                                <Container className="mx-auto">
                                    <div className="mx-auto text-center">
                                        <h2>{address}</h2>
                                        <p style={{ fontSize: 20 }}>Actualizado à {convertTimestamp(weatherInfo.current.dt)}</p>

                                        <span style={{ fontSize: 60 }}>
                                            {weatherInfo.current.temp}
                                            <span>&#8451;</span>
                                        </span>
                                        <p style={{ textTransform: 'capitalize', fontSize: 20 }}>{weatherInfo.current.weather[0].description}</p>
                                        <div style={{ fontSize: 18 }} className="row w-75 mx-auto">
                                            <div className="col-sm-12 col-md-4">
                                                <span style={{ fontWeight: 500 }}>Humidade: </span>
                                                {weatherInfo.current.humidity} %
                                            </div>
                                            <div className="col-sm-12 col-md-4">
                                                <span style={{ fontWeight: 500 }}>Visibilidade: </span>
                                                {Number(weatherInfo.current.visibility) / 1000} km
                                            </div>
                                            <div className="col-sm-12 col-md-4">
                                                <span style={{ fontWeight: 500 }}>Vento: </span>
                                                {(Number(weatherInfo.current.wind_speed) * 3.6).toFixed(2)} km/h
                                            </div>
                                        </div>
                                    </div>


                                    <div className="pt-5">
                                       <DailyWeather dailyWeather={weatherInfo.daily}/>
                                    </div>

                                </Container>

                            </div>
                        </>
                        :
                        <div className="pt-5">
                            <Container className="mx-auto">


                                <div className="mx-auto text-center">
                                    <h2>Sem informação disponível</h2>
                                </div>

                            </Container>
                        </div>

                    }
                </>
            }
        </div>
    )
}
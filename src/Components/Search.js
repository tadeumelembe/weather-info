import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

const googleMapKey = process.env.GOOGLE_API_KEY

function initGoogleScripts() {
    return new Promise(resolve => {
        const script = document.createElement('script')
        const body = document.getElementsByTagName('head')[0]
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBOmbgpcRJXTRLaF0YVwXHFPxSmCbGf7lA&libraries=places&v=weekly&channel=2`
        script.async = true
        body.appendChild(script)
        script.addEventListener('load', () => {
            return resolve(script)
        })
    })
}

export default function Search() {
    const [address, setAddress] = useState('');
    const routeNavigation = useHistory()

    const initMapScript = () => {
        // if script already loaded
        if (window.google) {
            return Promise.resolve();
        }

        return initGoogleScripts();
    }


    useEffect(() => {
        window.google = undefined

        initMapScript().then(() => initAutocomplete())


    }, [])

    const initAutocomplete = () => {

        // Create the search box and link it to the UI element.
        const input = document.getElementById("pac-input");
        var options = {
            types: ['(cities)']
        };
        const searchBox = new window.google.maps.places.SearchBox(input, options);


        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener("places_changed", () => {
            const places = searchBox.getPlaces();

            let addressName = places[0].formatted_address;

            places.forEach(place => {
                if (place.geometry) {
                    console.log('lat', place.geometry.location.lat())
                    console.log('lng', place.geometry.location.lng())
                    let coordinates = {
                        lat: place.geometry.location.lat(),
                        lng: place.geometry.location.lng()
                    }
                    return routeNavigation.push(`/weather/${addressName}/${coordinates.lat}/${coordinates.lng}`)
                    //return getWeather(place.geometry.location.lat(), place.geometry.location.lng());
                }
            });
        });
    }


    return (
        <>
            <SearchIcon />
            <input
                id="pac-input"
                className="controls"
                type="text"
                placeholder="Introduzir cidade/região"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
            />
        </>
    )
}
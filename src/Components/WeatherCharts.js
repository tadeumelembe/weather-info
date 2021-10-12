import React, { useEffect } from 'react'
import { Chart } from "react-google-charts";
import { Spinner } from 'react-bootstrap';


export default function WeatherCharts(props) {
    console.log('-----------------------')
    console.log(props.weather)

    function initGoogleScripts() {
        return new Promise(resolve => {
            const script = document.createElement('script')
            const body = document.getElementsByTagName('head')[0]
            script.src = `https://www.gstatic.com/charts/loader.js`
            script.async = true
            body.appendChild(script)
            script.addEventListener('load', () => {
                return resolve(script)
            })
        })
    }

    const initMapScript = () => {
        // if script already loaded
        if (window.google) {
            return Promise.resolve();
        }

        return initGoogleScripts();
    }

    useEffect(() => {
        window.google = undefined

        initMapScript().then(() => googleCharts())


    }, [])



    function convertTimestamp(timestamp) {
        var d = new Date(timestamp * 1000),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
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

        time = dd + '/' + mm;
        return time;
    }

    function googleCharts() {

        window.google.charts.load('current', { packages: ['corechart', 'line'] });
        window.google.charts.setOnLoadCallback(drawBasic);

        function drawBasic() {

            var data = new window.google.visualization.DataTable();
            data.addColumn('string', 'X');
            data.addColumn('number', 'Temperatura');

            data.addRows([
                [convertTimestamp(props.weather[0].dt), props.weather[0].temp.max],
                [convertTimestamp(props.weather[1].dt), props.weather[1].temp.max],
                [convertTimestamp(props.weather[2].dt), props.weather[2].temp.max],
                [convertTimestamp(props.weather[3].dt), props.weather[3].temp.max],
                [convertTimestamp(props.weather[4].dt), props.weather[4].temp.max],
                [convertTimestamp(props.weather[5].dt), props.weather[5].temp.max],
                [convertTimestamp(props.weather[6].dt), props.weather[6].temp.max],
            ]);

            var options = {
                hAxis: {
                    title: 'Data'
                },
                vAxis: {
                    title: 'Temperatura (Celsius)'
                }
            };

            var chart = new window.google.visualization.LineChart(document.getElementById('chart_div'));

            chart.draw(data, options);
        }
    }

    return (
        <div style={{ maxWidth: '100%', width: '90%' }} className="row">

            <div className="col-12 w-full">
                <h5>Gráfico da taxa de variação da temperatura</h5>
            </div>
            <div className="col-12 w-full mx-auto text-center">
                <div className="mx-auto" id="chart_div" style={{ height: 400 }}></div>
            </div>
        </div>
    )
}
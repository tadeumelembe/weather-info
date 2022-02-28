import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Card } from 'react-bootstrap';
import WeatherCharts from './WeatherCharts';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function DailyWeather(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //week days array
    const weekDaysArray = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

    function convertTimestamp(timestamp) {
        var d = new Date(timestamp * 1000);
        let mm = ('0' + (d.getMonth() + 1)).slice(-2);
        let dd = ('0' + d.getDate()).slice(-2);
        
        let time = dd + '/' + mm;
        return time;
    }

    function getWeekDay(timestamp) {
        var d = new Date(timestamp * 1000);
        let ww = d.getDay();

        return weekDaysArray[ww];
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: "#20232a"
                        }
                    }}
                >
                    <Tab label="Daily" {...a11yProps(0)} />
                    <Tab label="Graph" {...a11yProps(1)} />
                    <Tab label="Map" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <div className="row">
                    {props.dailyWeather.map((item, index) => {
                        if (index === 0 || index >= 6) return(<div key={index}></div>);
                        return (
                            <div key={index} className="col-12 p-2 col-md-6">
                                <Card style={{ width: '100%' }}>
                                    <Card.Body>
                                        <div className="d-flex">
                                            <h6 style={{ marginRight: 10 }} className="my-auto">{getWeekDay(item.dt)}, {convertTimestamp(item.dt)}  </h6>

                                            <div style={{ marginLeft: 5 }} className="my-auto">
                                                <h3 style={{ display: 'inline' }} className="">{item.temp.max}<span>&#8451;</span></h3>

                                                <h6 style={{ display: 'inline', marginLeft: 5 }} className="text-muted">{item.temp.min}<span>&#8451;</span></h6>
                                            </div>

                                            <p style={{ marginLeft: 30 }} className="my-auto text-capitalize">
                                                {item.weather[0].description}
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <WeatherCharts weather={props.dailyWeather} />
            </TabPanel>
            <TabPanel value={value} index={2}>

            </TabPanel>
        </div>
    );
}

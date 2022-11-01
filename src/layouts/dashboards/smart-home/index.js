/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://material-ui.com/store/items/soft-ui-pro-dashboard/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import WeatherCard from "examples/Cards/WeatherCard";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import ReportsDoughnutChart from "examples/Charts/DoughnutCharts/ReportsDoughnutChart";
import ThinBarChart from "examples/Charts/BarCharts/ThinBarChart";
import ControllerCard from "examples/Cards/ControllerCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

import * as moment from 'moment'

// SmartHome dashboard components
import Cameras from "layouts/dashboards/smart-home/components/Cameras";
import TemperatureSlider from "layouts/dashboards/smart-home/components/TemperatureSlider";

// Data
import reportsDoughnutChartData from "layouts/dashboards/smart-home/data/reportsDoughnutChartData";
import thinBarChartData from "layouts/dashboards/smart-home/data/thinBarChartData";
import controllerCardIcons from "layouts/dashboards/smart-home/data/controllerCardIcons";

// Images
import iconSunCloud from "assets/images/small-logos/icon-sun-cloud.png";
import useDashboard from "hooks/useDashboard";

import DataTable from "examples/Tables/DataTable";
import Card from "@mui/material/Card";

import useAPI from "hooks/useAPI"

const relayxSignIn = async () => {
  const token = await relayone.authBeta();

  const json = JSON.parse(atob(token.split('.')[0]));
  localStorage.setItem('auth.type', 'relayx');
  localStorage.setItem('relayx.token', token);
  localStorage.setItem('relayx.auth', JSON.stringify(json));
  localStorage.setItem('relayx.paymail', json.paymail);
  localStorage.setItem('relayx.pubkey', json.pubkey);
  localStorage.setItem('relayx.origin', json.origin);
  localStorage.setItem('relayx.issued_at', json.issued_at);

  const user = {
    id: json.pubkey,
    email: json.paymail,
    name: json.paymail
  };
  const dispatch = {
    type: 'LOGIN',
    payload: {
      wallet: 'relayx',
      isLoggedIn: true,
      user
    }
  };

  return {json, user, dispatch};
};

export const relayxSignOut = async () => {

  localStorage.setItem('auth.type', undefined)
  localStorage.setItem('relayx.token', undefined);
  localStorage.setItem('relayx.auth', undefined);
  localStorage.setItem('relayx.paymail', undefined);
  localStorage.setItem('relayx.pubkey', undefined);
  localStorage.setItem('relayx.origin', undefined);
  localStorage.setItem('relayx.issued_at', undefined);


  const dispatch = {
    type: 'LOGOUT',
    payload: {
      wallet: 'relayx',
      isLoggedIn: false,
    }
  };

  return {dispatch};
};



function SmartHome() {
  const [temperature, setTemperature] = useState(21);
  const {
    humidityIconLight,
    temperatureIconLight,
    airConditionerIconLight,
    lightsIconLight,
    wifiIconLight,
    humidityIconDark,
    airConditionerIconDark,
    lightsIconDark,
    wifiIconDark,
  } = controllerCardIcons;

  // Controller cards states
  const [humidityState, setHumidityState] = useState(false);
  const [temperatureState, setTemperatureState] = useState(true);
  const [airConditionerState, setAirConditionerState] = useState(false);
  const [lightsStata, setLightsStata] = useState(false);
  const [wifiState, setWifiState] = useState(true);

  const { data, error, loading, refresh } = useDashboard('home-power')

  const machineIdentifier = '1CfUeaF6yuv9LG8KLyRQa1n5YRDEiu2j2h'

  const {
    data: sensorData,
    loading: sensorDataLoading,
    error: sensorDataError } = useAPI(`/v1/machines/${machineIdentifier}/events`)

  window['relayxSignIn'] = relayxSignIn;


  if (error) {
    return <>Error</>
  }


  if (!data || loading) {
    return <>Loading</>
  }

  const { dashboard } = data

  console.log('dashboard data loaded', dashboard)

  const dataTableData = {
    columns: [
      { Header: "timestamp", accessor: "timestamp", },

      { Header: "HomeGrid-ChargingVoltage", accessor: "HomeGrid-ChargingVoltage", },
      { Header: "HomeGrid-SoC", accessor: "HomeGrid-SoC",  },
      { Header: "HomeGrid-SoH", accessor: "HomeGrid-SoH" },
      { Header: "HomeGrid-SystemVoltage", accessor: "HomeGrid-SystemVoltage" },
      { Header: "Blockchain Event", accessor: "txid" }
    ],
  
    rows: []
  }

  console.log('sensorData', sensorData)

  if (sensorData) {

    dataTableData.rows = sensorData.events.map(event => {

      if (event?.content?.set1) {

        console.log('SET 1', event?.content?.set1)

        return Object.assign(event.content.set1, {
          timestamp: moment(event.content.timestamp * 1000).format(),
          txid: event.txid
        })
      }
    })
    .filter(event => !!event)

  }

  const row = dataTableData.rows[0]

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox pt={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} xl={7}>
              <Cameras />
            </Grid>
            <Grid item xs={12} xl={5}>
              {sensorData && (
                  <Grid container spacing={3}>

                  <Grid item xs={12}>
                    <WeatherCard
                      title="weather today"
                      weather={{ location: dashboard.city, degree: dashboard.weather_temperature }}
                      icon={{ component: iconSunCloud, text: dashboard.weather }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <DefaultCounterCard
                      count={row['HomeGrid-ChargingVoltage']}
                      suffix={<></>}
                      title="Charging Voltage"
                      description="Home Grid"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <DefaultCounterCard
                      count={row['HomeGrid-SystemVoltage']}
                      suffix=""
                      title="System Voltage"
                      description="Home Grid"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <DefaultCounterCard
                      count={row['HomeGrid-SoC']}
                      suffix=""
                      title="State of Charge"
                      description="Home Grid"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <DefaultCounterCard
                      count={row['HomeGrid-SoH']}
                      suffix=""
                      title="State of Health"
                      description="Home Grid"
                    />
                  </Grid>
                </Grid>
              )}

            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Card>
            <SoftBox p={3} lineHeight={1}>
              <SoftTypography variant="h5" fontWeight="medium">
                Live Battery Data on Blockchain
              </SoftTypography>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                Historial device data is streamed to the blockchain in real time for permanent archival.
              </SoftTypography>
            </SoftBox>
            {sensorData ? (
              <DataTable table={dataTableData} />
            ): (
              <SoftBox>

              <p>Loading Sensor Data</p>
              </SoftBox>

            )}
            
          </Card>
        </SoftBox>
  
      </SoftBox>

      <SoftBox my={6} width="100%">
        <Divider />
      </SoftBox>
      {/* 
      <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <ReportsDoughnutChart
                title="Consumption by room"
                count={{ number: dashboard['consumption_by_room.watts'], text: "watts" }}
                chart={reportsDoughnutChartData}
                tooltip="See the consumption per room"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <ThinBarChart title="Consumption per day" chart={thinBarChartData} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <TemperatureSlider
                handle1={{
                  value: dashboard.device_temperature,
                  onChange: (v) => setTemperature(Math.round(v)),
                }}
                title="Device limit"
                current={
                  <>
                    {dashboard.device_temperature}
                    <SoftTypography component="span" variant="h4" color="text">
                      &deg;C
                    </SoftTypography>
                  </>
                }
                label="temperature"
                start={<>16&deg;C</>}
                end={<>38&deg;C</>}
                minValue={16}
                maxValue={38}
              />
            </Grid>
          </Grid>
        </SoftBox>
      <SoftBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={2}>
            <ControllerCard
              state={dashboard['switches.humidity']}
              icon={humidityState ? humidityIconLight : humidityIconDark}
              title="humidity"
              description="Inactive since: 2 days"
              onChange={() => setHumidityState(!humidityState)}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={2}>
            <ControllerCard
              state={dashboard['switches.temperature']}
              icon={temperatureIconLight}
              title="temperature"
              description="Active"
              onChange={() => setTemperatureState(!temperatureState)}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={2}>
            <ControllerCard
              state={dashboard['switches.air_conditioner']}
              icon={airConditionerState ? airConditionerIconLight : airConditionerIconDark}
              title="air conditioner"
              description="Inactive since: 1 hour"
              onChange={() => setAirConditionerState(!airConditionerState)}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={2}>
            <ControllerCard
              state={dashboard['switches.lights']}
              icon={lightsStata ? lightsIconLight : lightsIconDark}
              title="lights"
              description="Inactive since: 27 min"
              onChange={() => setLightsStata(!lightsStata)}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={2}>
            <ControllerCard
              state={dashboard['switches.wifi']}
              icon={wifiState ? wifiIconLight : wifiIconDark}
              title="wi-fi"
              description="active"
              onChange={() => setWifiState(!wifiState)}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={2}>
            <PlaceholderCard title={{ variant: "h5", text: "New device" }} />
          </Grid>
        </Grid>
      </SoftBox>
      */}
      <Footer />
    </DashboardLayout>
  );
}

export default SmartHome;

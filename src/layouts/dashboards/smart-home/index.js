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

// SmartHome dashboard components
import Cameras from "layouts/dashboards/smart-home/components/Cameras";
import TemperatureSlider from "layouts/dashboards/smart-home/components/TemperatureSlider";

// Data
import reportsDoughnutChartData from "layouts/dashboards/smart-home/data/reportsDoughnutChartData";
import thinBarChartData from "layouts/dashboards/smart-home/data/thinBarChartData";
import controllerCardIcons from "layouts/dashboards/smart-home/data/controllerCardIcons";

// Images
import iconSunCloud from "assets/images/small-logos/icon-sun-cloud.png";

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

  window['relayxSignIn'] = relayxSignIn;

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
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <WeatherCard
                    title="weather today"
                    weather={{ location: "Austin", degree: 29 }}
                    icon={{ component: iconSunCloud, text: "cloudy" }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <DefaultCounterCard
                    count={21}
                    suffix={<>&deg;C</>}
                    title="Power Server"
                    description="temperature"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <DefaultCounterCard
                    count={44}
                    suffix="%"
                    title="outside"
                    description="humidity"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <DefaultCounterCard
                    count={87}
                    suffix="kW"
                    title="energy"
                    description="consumption"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <DefaultCounterCard
                    count={417}
                    suffix="kW"
                    title="energy"
                    description="production"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <ReportsDoughnutChart
                title="Consumption by room"
                count={{ number: 471.3, text: "whatts" }}
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
                  value: temperature,
                  onChange: (v) => setTemperature(Math.round(v)),
                }}
                title="Device limit"
                current={
                  <>
                    {temperature}
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
      </SoftBox>
      <SoftBox my={6} width="100%">
        <Divider />
      </SoftBox>
      <SoftBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={2}>
            <ControllerCard
              state={humidityState}
              icon={humidityState ? humidityIconLight : humidityIconDark}
              title="humidity"
              description="Inactive since: 2 days"
              onChange={() => setHumidityState(!humidityState)}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={2}>
            <ControllerCard
              state={temperatureState}
              icon={temperatureIconLight}
              title="temperature"
              description="Active"
              onChange={() => setTemperatureState(!temperatureState)}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={2}>
            <ControllerCard
              state={airConditionerState}
              icon={airConditionerState ? airConditionerIconLight : airConditionerIconDark}
              title="air conditioner"
              description="Inactive since: 1 hour"
              onChange={() => setAirConditionerState(!airConditionerState)}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={2}>
            <ControllerCard
              state={lightsStata}
              icon={lightsStata ? lightsIconLight : lightsIconDark}
              title="lights"
              description="Inactive since: 27 min"
              onChange={() => setLightsStata(!lightsStata)}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={2}>
            <ControllerCard
              state={wifiState}
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
      <Footer />
    </DashboardLayout>
  );
}

export default SmartHome;

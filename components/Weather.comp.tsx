import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

function getDateString(timestamp: any) {
  const rise = new Date(timestamp * 1e3);
  return rise.toDateString();
}
function getTimeString(timestamp: any) {
  const rise = new Date(timestamp * 1e3);
  return rise.toLocaleTimeString();
}
interface Props {
  city: string;
  country: string;
  temp: string;
  humid: string;
  wind: string;
  pressure: string;
  cloud: string;
  desc: string;
  type: string;
  sunrise: string;
  sunset: string;
  icon: number;
  time: string;
}

export default function Weather(props: Props) {
  return (
    <>
      <View style={styles.container}>
        <Image source={getWeatherIcon(props.icon)} style={styles.image}></Image>
        <Text style={styles.city}>
          {props.city}, {props.country}
        </Text>
        <Text style={styles.desc}>
          {props.type}({props.desc})
        </Text>
        <Text style={styles.date}>{getDateString(props.time)}</Text>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text>
              <Image
                source={require("../assets/data-icons/temperature-low.png")}
                style={styles.icon}
              ></Image>
            </Text>
            <Text style={styles.data}>
              <Image
                source={require("../assets/data-icons/wind.png")}
                style={styles.icon}
              ></Image>
            </Text>
            <Text style={styles.data}>
              <Image
                source={require("../assets/data-icons/humidity.png")}
                style={styles.icon}
              ></Image>
            </Text>
            <Text style={styles.data}>
              <Image
                source={require("../assets/data-icons/air-instrumentation.png")}
                style={styles.icon}
              ></Image>
            </Text>
            <Text style={styles.data}>
              <Image
                source={require("../assets/data-icons/sky.png")}
                style={styles.icon}
              ></Image>
            </Text>
          </View>
          <View style={styles.col}>
            <Text
              style={{ color: "white", fontFamily: "MarcellusSC_400Regular", marginTop: 2 }}
            >
              {props.temp} °C
            </Text>
            <Text style={styles.data2}>{props.wind} m/s</Text>
            <Text style={styles.data2}>{props.humid} %</Text>
            <Text style={styles.data2}>{props.pressure} hPa</Text>
            <Text style={styles.data2}>{props.cloud} %</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.data3}>
              <Image
                source={require("../assets/data-icons/sunrise.png")}
                style={styles.icon}
              ></Image>{" "}
              {getTimeString(props.sunrise)}
            </Text>
          </View>
          <View>
            <Text style={styles.data3}>
              <Image
                source={require("../assets/data-icons/sunset.png")}
                style={styles.icon}
              ></Image>{" "}
              {getTimeString(props.sunset)}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  city: {
    fontSize: 27,
    color: "white",
    fontWeight: "500",
    fontFamily: "MarcellusSC_400Regular",
  },
  date: {
    fontFamily: "MarcellusSC_400Regular",
    fontSize: 17,
    color: "white",
    fontWeight: "500",
  },
  desc: {
    fontFamily: "MarcellusSC_400Regular",
    fontSize: 15,
    color: "white",
    fontWeight: "500",
  },
  container: {
    padding:5,
    paddingBottom:15,
    marginTop: 45,
    borderRadius: 12,
    borderColor: "hsla(0,0%,85.1%,.22)",
    borderWidth: 1,
    width: "100%",
    height: "22rem",
    backgroundColor: "rgba(170,154,154,.22)",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginRight: "-1rem",
    width: 80,
    height: 80,
    alignSelf: "flex-end",
    marginTop: "-2rem",
    zIndex: 999,
  },
  icon: {
    width: 25,
    height: 25,
  },
  row: {
    margin: "0 auto",
    flexDirection: "row",
  },
  col: {
    margin: 15,
  },
  data: {
    marginTop: 10,
    color: "white",
    fontFamily: "MarcellusSC_400Regular",
  },
  data2: {
    marginTop: 22,
    color: "white",
    fontFamily: "MarcellusSC_400Regular",
  },
  data3: {
    marginBottom: 20,
    paddingLeft: 6,
    paddingRight: 6,
    fontSize:13,
    color: "white",
    fontFamily: "MarcellusSC_400Regular",
  },
});

function getWeatherIcon(id: number) {
  if (id >= 200 && id <= 232) {
    return require("../assets/weather-icons/lighting.png"); /*lighting*/
  } else if (id >= 300 && id <= 321) {
    return require("../assets/weather-icons/drizzel.png"); /*drizzel*/
  } else if (id >= 500 && id <= 531) {
    return require("../assets/weather-icons/rain.png"); /*rain*/
  } else if (id >= 600 && id <= 622) {
    return require("../assets/weather-icons/snow.png"); /*snow*/
  } else if (id >= 701 && id <= 781) {
    return require("../assets/weather-icons/wind.png"); /*wind*/
  } else if (id >= 801 && id <= 804) {
    return require("../assets/weather-icons/cloud.png"); /*cloud*/
  } else if (id == 800) {
    return require("../assets/weather-icons/sun.png"); /*sun*/
  } else {
    return "";
  }
}

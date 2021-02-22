import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import Input from "./components/Input.comp";
import Error from "./components/Error.comp";
import Weather from "./components/weather.comp";
import "./font.css";
import * as Location from "expo-location";
const api = {
  /*GET API KEY*/
  key: require('./data.json').key,
  url: "https://api.openweathermap.org/data/2.5/",
};

export default function App() {
  const [query, setQuery] = useState<string>("");
  const [weather, setWeather] = useState<any>({});
  const [location, setlocation] = useState<boolean>(false);

  useEffect(() => {
    if (location != true) {
      navigator.geolocation.getCurrentPosition(showPosition, showPositionError);
      //load();
      setlocation(true);
    }
  }, []);
  const showPosition = (position: any) => {
    fetch(
      `${api.url}/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${api.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  };
  const showPositionError = (error: any) => {
    console.log(error);
    alert(error.message);
  };
  /*GET DATA FROM LAT AND LONG*/
  async function load() {
    try {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Access to location is needed to run the app");
      } else {
        const position = await Location.getCurrentPositionAsync();
        showPosition(position);
      }
      //console.log(position.coords.latitude+"-----"+position.coords.longitude);
    } catch (error) {
      alert(error.message);
    }
  }

  const search = (event: any) => {
    if (event.key === "Enter") {
      fetch(`${api.url}weather?q=${query}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={
          typeof weather.main != "undefined"
            ? getWeatherIcon(weather.weather[0].id)
            : require("./assets/background/rain.webp")
        }
        style={styles.image}
      >
          <Input setQuery={setQuery} search={search} query={query}></Input>
          {typeof weather.message != "undefined" ? (
            <Error error={weather.message} />
          ) : (
            ""
          )}
          {typeof weather.main != "undefined" ? (
            <Weather
              city={weather.name}
              country={weather.sys.country}
              temp={weather.main.temp}
              humid={weather.main.humidity}
              wind={weather.wind.speed}
              pressure={weather.main.pressure}
              cloud={weather.clouds.all}
              desc={weather.weather[0].description}
              type={weather.weather[0].main}
              sunrise={weather.sys.sunrise}
              sunset={weather.sys.sunset}
              icon={weather.weather[0].id}
              time={weather.dt}
            />
          ) : (
            ""
          )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    margin: 0,
    backgroundColor: "#000",
    height: "100%",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    //justifyContent: "center",
    padding: 15,
  },
});

function getWeatherIcon(id: number) {
  if (id >= 200 && id <= 531) {
    return require("./assets/background/rain.webp");
  } else if (id >= 600 && id <= 622) {
    return require("./assets/background/snow.webp");
  } else if (id == 800) {
    return require("./assets/background/sun.webp");
  } else if (id >= 701 && id <= 804) {
    return require("./assets/background/clouds.webp");
  }
}

const APIKey = "NAoL31vaNpeFPCBI3YiLDy5YvsyEakhC";

const getCityUrl = cityName => {
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`;
}


const getCityData = async url => {
  try {
    const response = await fetch(cityUrl);
    
    if(!response.ok) {
      throw new Error("Não foi possível obter os dados");
    }

    return response.json();
  } catch ({ name, message }) {
    alert(`${name}: ${message}`);
  }
}


const getCityWeather = async (cityName) => {
  try {
    const { Key } = await getCityData(cityName);
    const cityWeatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}`;
    const response = await fetch(cityWeatherUrl);

    if(!response.ok) {
      throw new Error("Não foi possível obter os dados");
    }
    
    const [cityWeatherData] = await response.json();
    return cityWeatherData;
  } catch ({ name, message }) {
    alert(`${name}: ${message}`);
  }
}

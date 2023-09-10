const temperatureData = {
    'New York': 20,
    'London': 18,
    'Paris': 22,
    'Tokyo': 25,
    'Sydney': 28,
  };
  
  function createTemperatureCache() {
    const cache = {}; // Private cache object
  
    return function getTemperatureForCity(city) {
      if (cache[city] !== undefined) {
        // If the temperature for the city is cached, return it
        return cache[city];
      } else if (temperatureData[city] !== undefined) {
        // If the temperature is available in the data, cache and return it
        cache[city] = temperatureData[city];
        return cache[city];
      } else {
        // City not found in data
        return 'City not found';
      }
    };
  }
  
  // Create an instance of the temperature cache function
  const getTemperatureForCity = createTemperatureCache();
  
  // Example usage
  const temperature1 = getTemperatureForCity('New York');
  console.log(temperature1); // 20
  
  const temperature2 = getTemperatureForCity('New York');
  console.log(temperature2); // 20 (retrieved from cache)
  
  const temperature3 = getTemperatureForCity('London');
  console.log(temperature3); // 18
  
  const temperature4 = getTemperatureForCity('London');
  console.log(temperature4); // 18 (retrieved from cache)
  
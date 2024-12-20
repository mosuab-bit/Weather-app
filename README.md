# Weather App

This Weather App is a simple, user-friendly application built with **React**. It leverages the **OpenWeather API** to fetch and display real-time weather information for a specific location. The app uses **Axios** for making HTTP requests .

---

## Features

- **Real-Time Weather Data**: Displays the current temperature, weather description, and min/max temperatures.
- **Dynamic Icons**: Shows weather-related icons fetched from OpenWeather.
- **Localized Time**: Displays the current date and time using Moment.js.
- **Toggle Language**: Supports English and Arabic with a simple toggle button (using `react-i18next`).

---

## Technologies Used

- **React**: For building the user interface.
- **Axios**: For making HTTP requests to the OpenWeather API.
- **Moment.js**: For date and time formatting.
- **React-i18next**: For language translation support.

## Usage

1. View the weather information for the default location (Amman, Jordan).
2. Toggle the language between English and Arabic using the provided button.

---

## API Integration

This app uses the [OpenWeather API](https://openweathermap.org/api) to fetch weather data. Below is an example of the API call:

```javascript
axios.get(
  `https://api.openweathermap.org/data/2.5/weather?lat=31.963158&lon=35.930359&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
)
```

- Replace `lat` and `lon` with the desired location's latitude and longitude.
- The `appid` should contain your OpenWeather API key.

---

## Folder Structure

```
weather-app/
├── public/       # Static files
├── src/
|   ├── components/ # Reusable React components
|   ├── App.jsx      # Main app logic
|   ├── index.jsx    # Entry point
|   ├── i18n.jsx     # Localization setup
├── .env          # Environment variables
├── package.json  # Project metadata and dependencies
```

---

## Future Improvements

- Add a location search feature to fetch weather for different cities.
- Display a 5-day weather forecast.
- Enhance UI/UX with animations and themes.

---

## Contributing

Contributions are welcome! If you want to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.



## Acknowledgements

- [OpenWeather](https://openweathermap.org/) for providing the weather data API.
- [Moment.js](https://momentjs.com/) for date and time formatting.

---

Happy coding! :sparkles:



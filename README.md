# PRODIGY_WT_5

Weather Web Application

## Description

PRODIGY_WT_5 is a simple, responsive weather web application that displays current weather information for a searched city. The project is built with HTML, CSS, and JavaScript and demonstrates fetching weather data from an API and rendering it in the browser.

## Features

- Search by city name
- Display temperature, weather description, humidity, wind speed, and an icon representing current conditions
- Responsive layout for desktop and mobile

## Technologies

- HTML
- CSS
- JavaScript

## Setup & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/shahid3100/PRODIGY_WT_5.git
   cd PRODIGY_WT_5
   ```

2. Open `index.html` in your browser or serve the folder with a static server:
   ```bash
   # using Python 3
   python -m http.server 8000
   # then open http://localhost:8000 in your browser
   ```

3. If the app uses an external weather API (e.g., OpenWeatherMap), add your API key where the project expects it (check the JavaScript file that fetches weather data). For local testing you may need to set the API key variable inside the JS file or an environment file depending on implementation.

## Project Structure (typical)

- index.html
- css/
  - styles.css
- js/
  - app.js
- assets/
  - icons/

Adjust the structure above to match the repository layout if different.

## Contributing

Contributions are welcome. Open an issue or submit a pull request with improvements or bug fixes.

## License

This project is provided as-is. Add a LICENSE file if you wish to specify a license.

## Author

Created by shahid3100
